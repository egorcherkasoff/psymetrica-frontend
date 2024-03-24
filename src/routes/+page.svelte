<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
    <title>Главная | Psymetrica</title>
</svelte:head>

<main class="main mt-header">
    <Container>контент главной страницы</Container>
</main>

<style lang="scss">
    @import "../lib/styles/index.scss";

    .main {
        position: relative;
        width: 100%;
        background-color: #fff;
    }
</style>
