<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Container from "$lib/components/Container.svelte";
    import Card from "$lib/components/cards/Card.svelte";
</script>

<Header></Header>

<main class="main">
    <Container>
        <div class="auth">
            <Card>.auth</Card>
        </div>
    </Container>
</main>

<style lang="scss">
    @import "../../lib/styles/index.scss";
    .main {
        height: 100vh;
    }
    .auth {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
