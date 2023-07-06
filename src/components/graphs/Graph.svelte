<script>
    export let data;
    import { LayerCake, Svg } from "layercake";
    import Slider from "@bulatdashiev/svelte-slider";

    import Line from "./Line.svelte";
    import Area from "./Area.svelte";
    import AxisX from "./AxisX.svelte";
    import AxisY from "./AxisY.svelte";

    // This example loads csv data as json using @rollup/plugin-dsv
    //import locationData from "../../data/aberporth.json";
    //let data = locationData.weatherData;

    const xKey = "date";
    let yKey = "tmax";

    let range = [0, data.length - 1];
    let startDate = data[range[0]].date;
    let endDate = data[range[1]].date;

    // data.forEach((d) => {
    //     d[yKey] = +d[yKey];
    // });

    // update the displayData object every time the radio button option is changed

    function fillDates() {
        //const startDate = Date.parse(data[range[0]].date);
        //const endDate = Date.parse(data[range[1]].date);
        // const dateRange = endDate - startDate;

        const dataRange = data.slice(range[0], range[1] + 1);

        dataRange.forEach((data) => {
            let date = new Date(data.date);

            data.date = date;
        });

        return dataRange;
    }

    const options = {
        year: "numeric",
        month: "long",
    };

    function parseDate(date) {
        const parsedDate = new Date(date);

        return parsedDate.toLocaleDateString("en-GB", options);
    }

    let displayData = fillDates();

    function refreshGraph() {
        displayData = fillDates();
    }

    $: console.log(displayData);
</script>

<div class="chart-container">
    <div class="slider">
        Start Date: {parseDate(data[range[0]].date)}<br />
        End Date: {parseDate(data[range[1]].date)}
        <Slider min="0" max={data.length - 1} bind:value={range} range />
        <button on:click={refreshGraph}>Refresh Graph</button>
    </div>
    <div class="selection">
        <input
            type="radio"
            id="tmax"
            name="x-axis"
            value="tmax"
            bind:group={yKey}
        />
        <label for="tmax">Maximum Temperature (&deg;C)</label><br />
        <input
            type="radio"
            id="tmin"
            name="x-axis"
            value="tmin"
            bind:group={yKey}
        />
        <label for="tmin">Minimum Temperature (&deg;C)</label><br />
        <input
            type="radio"
            id="af"
            name="x-axis"
            value="af"
            bind:group={yKey}
        />
        <label for="tmin">AF</label><br />
        <input
            type="radio"
            id="rain"
            name="x-axis"
            value="rain"
            bind:group={yKey}
        />
        <label for="tmin">Rainfall (mm)</label><br />
        <input
            type="radio"
            id="sun"
            name="x-axis"
            value="sun"
            bind:group={yKey}
        />
        <label for="tmin">Sunshine (Hours)</label><br />
    </div>
    <h2>{yKey}</h2>
    <LayerCake
        padding={{ top: 8, right: 10, bottom: 20, left: 25 }}
        x={xKey}
        y={yKey}
        yNice={4}
        yDomain={[null, null]}
        data={displayData}
    >
        <Svg>
            <AxisX />
            <AxisY ticks={4} />
            <Line />
            <Area />
        </Svg>
    </LayerCake>
</div>

<style>
    /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
    .chart-container {
        width: 100%;
        height: 400px;
    }

    .selection {
        padding: 10px;
    }

    .slider {
        padding: 10px;
        width: 40rem;
        background-color: gainsboro;
    }
</style>
