<script>
    export let data;
    import Graph from "../../../components/graphs/Graph.svelte";
    import Map from "../../../components/Map.svelte";
</script>

<div>
    <div class="location-details">
        <div class="details">
            <h2>{data.name}</h2>
            <h4>
                Altitude: {data.location.altitude}m amsl
            </h4>
            <h4>
                Latitude: {data.location.lat}, Longitude: {data.location.long}
            </h4>
        </div>
        <Map location={data.location} />
    </div>
    <Graph data={data.weatherData} />
</div>

<style>
    .details {
        background-color: #e3f2ff;
        padding: 10px;
        margin: 5px;
        border-radius: 5px;
    }

    .location-details {
        display: flex;
    }
</style>
