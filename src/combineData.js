// @ts-nocheck
import { locations } from './data/locations.js'
import fs from 'fs';
import readline from 'readline';
import events from 'events';

const data = [];

(async function allLocations() {
    for (const location of locations) {
        await fileByFile(location);
    }

    saveFile();

})();

async function fileByFile(location) {

    try {

    const rl = readline.createInterface({
            input: fs.createReadStream(`./src/data/${location}.json`),
            crlfDelay: Infinity
        });

        rl.on('line', line => {
            data.push({location: location, data: line})
        });

        await events.once(rl, 'close');
        console.log('Reading file line by line with readline done.');

    } catch (err) {
        console.log(err)
    }
};

async function saveFile() {
    await fs.writeFile(`./src/data/allData.js`, JSON.stringify(data), err => {
        if (err)
            console.log(err)
        else {
            console.log("File written successfully");
        }
    });
}
