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