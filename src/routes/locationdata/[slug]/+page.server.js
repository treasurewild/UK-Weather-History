import { locationData } from '../../../data/locationData.js';

export function load({ params }) {
    const locations = JSON.parse(locationData);

    const location = locations.find(location => location.slug === params.slug);

    return {
        location
    };
}