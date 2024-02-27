<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<Header></Header>
<main class="main">1</main>

<style lang="scss">
    @import "../lib/styles/index.scss";

    .main {
        position: relative;
        height: 100vh;
        width: 100%;
        background-color: #fff;
    }
</style>
