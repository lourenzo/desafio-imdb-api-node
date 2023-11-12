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
  parser.on("readable", function () {
    let record: any;
    while ((record = parser.read()) !== null) {
      categories.add(record.category);
    }
  });

  reader.pipe(gunzip).pipe(parser);

  parser.on("end", () => {
    console.log(categories);
  });
};

parseFile("./title.principals.tsv.gz");
