import { locations } from '../../../data/locations';

export function load({ params }) {
    const location = locations.find(location => location.slug === params.slug);

    return {
        location
    };
}