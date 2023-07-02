import fs from 'fs';
import { parse } from 'csv-parse';

fs.createReadStream('./weather-data/src/data/mod/aberporthdata.csv')
    .pipe(parse({ delimiter: ',', from_line: 2 }))
    .on('data', row => {
        console.log(row)
    })