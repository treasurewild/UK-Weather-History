// @ts-nocheck
import { locations } from './data/locations.js'
import fs from 'fs';
import readline from 'readline';
import events from 'events';

(function allLocations() {
    locations.forEach(location => {
        lineByLine(location);
    })
})();

async function lineByLine(location) {

    const data = {
        slug: "",
        name: "",
        location: {
            lat: 0,
            long: 0,
            altitude: 0
        },
        weatherData: []
    }

    try {

        const rl = readline.createInterface({
            input: fs.createReadStream(`./src/data/txt/${location}data.txt`),
            crlfDelay: Infinity
        });

        let lineNumber = 1;
        // Need a way to assess where the data starts and sanitise location data
        // For now I've done this manually
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

            if (lineNumber > 100) // Only first 100 lines at present
                return;

            if (lineNumber > 7) {
                var temp = line.trim();
                temp = temp.replace(/#/g, "").replace(/---/g, "0");

                temp = temp.replace(/\s{1,}/g, ",")

                var tempArr = temp.split(',')

                if (tempArr[1].length < 2)
                    tempArr[1] = "0" + tempArr[1];

                var tempObj = {
                    date: `${tempArr[0]}${tempArr[1]}`,
                    year: parseInt(tempArr[0]),
                    month: parseInt(tempArr[1]),
                    tmax: parseFloat(tempArr[2]),
                    tmin: parseFloat(tempArr[3]),
                    af: parseFloat(tempArr[4]),
                    rain: parseFloat(tempArr[5]),
                    sun: parseFloat(tempArr[6]),
                }

                data.weatherData.push(tempObj);
            }

            lineNumber++;
        });

        await events.once(rl, 'close');
        console.log('Reading file line by line with readline done.');

        await fs.writeFile(`./src/data/${location}.json`, JSON.stringify(data), err => {
            if (err)
                console.log(err)
            else {
                console.log("File written successfully")
            }
        });

    } catch (err) {
        console.log(err);
    }
};