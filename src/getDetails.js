// @ts-nocheck
import { locations } from './data/locations.js'
import fs from 'fs';
import readline from 'readline';
import events from 'events';

const locationData = [];

(async function allLocations() {
    for (const location of locations) {
        await getDetails(location);
    }

    saveFile();

})();

async function getDetails(location) {

    const data = {
        slug: "",
        name: "",
        location: {
            lat: 0,
            long: 0,
            altitude: 0
        }
    }

    try {

        const rl = readline.createInterface({
            input: fs.createReadStream(`./src/data/txt/${location}data.txt`),
            crlfDelay: Infinity
        });

        let lineNumber = 1;

        rl.on('line', line => {
            if (lineNumber === 1) {
                data.slug = line.replace(/\s/g, "");
                data.name = line;
            }

            if (lineNumber === 2) {
                var str = line.split(',');

                var latLong = str[1];
                latLong = latLong.trim().split(" ");

                data.location.lat = parseFloat(latLong[1]);
                data.location.long = parseFloat(latLong[3]);
                data.location.altitude = parseInt(str[2]);
            }

            if (lineNumber > 2)
                return;

            lineNumber++;
        });

        locationData.push(data);

        await events.once(rl, 'close');
        console.log('Reading file first 2 lines with readline done.');

    } catch (err) {
        console.log(err);
    }
};

async function saveFile() {
    await fs.writeFile(`./src/data/locationData.json`, JSON.stringify(locationData), err => {
        if (err)
            console.log(err)
        else {
            console.log("File written successfully")
        }
    });
}