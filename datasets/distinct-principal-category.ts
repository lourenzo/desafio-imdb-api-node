import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { parse } from "csv";

const parseFile = (fileName: string) => {
  console.log("Starting stream processing...");
  
  const reader = createReadStream(fileName);
  const gunzip = createGunzip();
  const parser = parse({
    delimiter: "\t",
    relax_quotes: true,
    columns: true,
  });

  const categories = new Set();
  
  let lineCount = 0;
  const totalLines = 58969177;
  
  parser.on("readable", function () {
    let record: any;
    while ((record = parser.read()) !== null) {
      categories.add(record.category);
      lineCount ++;

      if (lineCount%100 == 0) {
        const rate = lineCount * 100 / totalLines;
        process.stdout.write(`\rLine: ${lineCount} of ${totalLines} -> ${rate.toLocaleString()}%`);
      }
    }
  });

  reader.pipe(gunzip).pipe(parser);

  parser.on("end", () => {
    console.log(categories);
  });
};

parseFile("./title.principals.tsv.gz");
