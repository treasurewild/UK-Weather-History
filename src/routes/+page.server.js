import { locationData } from '../data/locationData.js';

export function load() {
    const locations = JSON.parse(locationData);
    return {
        locations: locations.map(location => ({
            slug: location.slug,
            name: location.name
        }))
    }
}