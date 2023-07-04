<script>
    export let data;
    import { LayerCake, Svg } from "layercake";

    import Line from "./Line.svelte";
    import Area from "./Area.svelte";
    import AxisX from "./AxisX.svelte";
    import AxisY from "./AxisY.svelte";

    // This example loads csv data as json using @rollup/plugin-dsv
    //import locationData from "../../data/aberporth.json";
    //let data = locationData.weatherData;
    console.log(data);

    const xKey = "date";
    let yKey = "tmax";

    data.forEach((d) => {
        d[yKey] = +d[yKey];
    });

    console.log(yKey);
</script>

<div class="chart-container">
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
        {data}
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
</style>
