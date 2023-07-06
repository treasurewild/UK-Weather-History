<script>
    export let name;
    export let href;
</script>

<div>
    <a {href}>{name}</a>
</div>

<style>
    a {
        text-decoration: none;
        font-size: larger;
        color: black;
    }
    div {
        padding: 30px;
        border-radius: 5px;
        background-color: #ace3ff;
        margin: 2px;
    }
</style>
