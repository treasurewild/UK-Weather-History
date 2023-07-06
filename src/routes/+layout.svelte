<nav>
    <img alt="favicon" src="../favicon.png" />
    <a href="/">Home</a>
</nav>

<slot />

<!-- <p>&copy; Wil Treasure 2023</p> -->

<style>
    nav {
        background-color: darkblue;
        padding: 10px;
        display: flex;
    }

    nav a {
        color: white;
        text-decoration: none;
        padding: 10px;
        font-size: larger;
        margin: auto 0;
    }

    nav img {
        margin: auto 0;
    }
</style>
