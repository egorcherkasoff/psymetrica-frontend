<script>
    import Container from "$lib/components/Container.svelte";
    import AvatarBig from "$lib/components/avatars/AvatarBig.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import Tab from "$lib/components/navigation/Tab.svelte";
    import Tabs from "$lib/components/navigation/Tabs.svelte";
    import GridList from "$lib/components/lists/GridList.svelte";
    import TestCard from "$lib/components/cards/TestCard.svelte";
    import { page } from "$app/stores";

    const user = $page.data;
</script>

<svelte:head>
    <title>Профиль пользователя {user.name} | Psymetrica</title>
</svelte:head>
<main class="main">
    <Container>
        <div class="info-box">
            <AvatarBig src={`http://localhost:8080${user.avatar}`} link=""
            ></AvatarBig>
            <h1 class="info-box__text">
                <HeadlineText>{user.name}</HeadlineText>
            </h1>
        </div>
        <Tabs>
            <Tab title="Тесты пользователя" isActive={true}></Tab>
            <Tab title="Профиль"></Tab>
        </Tabs>
        <div class="profile-tests">
            <GridList>
                {#if user.results && user.results.length > 0}
                    {#each user.results as test}
                        <TestCard
                            author={test.author}
                            createdAt={test.created_at}
                            id={test.id}
                            timesPassed={256}
                            title={test.title}
                        ></TestCard>
                    {/each}
                {/if}
            </GridList>
        </div>
    </Container>
</main>

<style lang="scss">
    @import "../../../lib/styles/index.scss";

    .main {
        padding-top: 160px;
    }

    .info-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        &__text {
            margin-top: 15px;
        }
    }
    .profile-tests {
        margin-top: 30px;
    }
</style>
