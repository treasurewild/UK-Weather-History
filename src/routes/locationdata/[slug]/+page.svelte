<script>
    export let data;
    import Graph from "../../../components/graphs/Graph.svelte";
    
// let modulePath = prompt("Which module to load?");

// import(modulePath)
//   .then(data => <module object>)
//   .catch(err => <loading error, e.g. if no such module>)

</script>

<div class="page">
    <h2>{data.name}</h2>
    <h3>
        Altitude: {data.location.altitude}m amsl
    </h3>
    <h3>
        Latitude: {data.location.lat}, Longitude: {data.location.long}
    </h3>
    <Graph data={data.weatherData} />
</div>

<style>
    .page {
        padding: 20px;
    }
</style>
