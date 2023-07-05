<script>
    export let data;
    import Graph from "../../../components/graphs/Graph.svelte";
    import Map from "../../../components/Map.svelte";
</script>

<div class="page">
    <div class="location-details">
        <div class="details">
            <h2>{data.name}</h2>
            <h3>
                Altitude: {data.location.altitude}m amsl
            </h3>
            <h3>
                Latitude: {data.location.lat}, Longitude: {data.location.long}
            </h3>
        </div>
        <Map location={data.location} />
    </div>
    <Graph data={data.weatherData} />
</div>

<style>
    .page {
        padding: 20px;
    }

    .details {
        background-color: lightcoral;
        padding: 10px;
        margin: 5px;
        border-radius: 5px;
    }

    .location-details {
        display: flex;
    }
</style>
