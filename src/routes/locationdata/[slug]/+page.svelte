<script>
    export let data;
</script>

<div class="page">
    <h2>{data.location.name}</h2>
    <h3>
        Latitude: {data.location.location.lat}, Longitude: {data.location
            .location.long}
    </h3>
</div>

<style>
    .page {
        padding: 20px;
    }
</style>
