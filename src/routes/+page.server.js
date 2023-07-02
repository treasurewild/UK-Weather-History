import { locations } from '../data/locations';

export function load() {
    return {
        locations: locations.map(location => ({
            slug: location.slug,
            name: location.name
        }))
    }
}