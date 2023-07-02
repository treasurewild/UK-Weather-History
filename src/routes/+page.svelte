<script>
    export let data;
</script>

<div class="page">
    <h1>Welcome to the Historical Weather App</h1>
    <p>
        This is a tool to display historical weather data from stations around
        the UK.<br />Teachers can also print lesson plans and worksheets for
        class projects using time-series graphs.
    </p>
    {#each data.locations as { slug, name }}
        <li><a href="/locationdata/{slug}">{name}</a></li>
    {/each}
</div>

<style>
    .page {
        padding: 20px;
    }
</style>
