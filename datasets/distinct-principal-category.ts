import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';
import {parse} from 'csv';

const parseFile = (fileName: string) => {
    console.log('oi');
    const reader = createReadStream(fileName);
    const gunzip = createGunzip();
    const parser = parse({
        delimiter: "\t",
        relax_quotes: true,
        escape: '\\', ltrim: true, rtrim: true
    });
    const records: any[] = [];
    parser.on('readable', function(){
        let record: any;
        while ((record = parser.read()) !== null) {
          records.push(record);
        }
      })
    
    reader.pipe(gunzip).pipe(parse())

    
}

parseFile("./title.principals.tsv.gz");