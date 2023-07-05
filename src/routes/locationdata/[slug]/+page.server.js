import { allData } from '../../../data/allData.js';

export function load({ params }) {
    const parseData = JSON.parse(allData);

    const data = parseData.find(location => location.data.slug === params.slug).data;

    return data;
}