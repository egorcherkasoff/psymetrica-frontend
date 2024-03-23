<script>
    import Container from "$lib/components/Container.svelte";
    import AvatarBig from "$lib/components/avatars/AvatarBig.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import Tab from "$lib/components/navigation/Tab.svelte";
    import Tabs from "$lib/components/navigation/Tabs.svelte";
    import GridList from "$lib/components/lists/GridList.svelte";
    import TestCard from "$lib/components/cards/TestCard.svelte";
    import { page } from "$app/stores";

    const user = {
        id: $page.data.id,
        name: $page.data.name,
        avatar: `http://localhost:8080${$page.data.avatar}`,
    };
</script>

<main class="main">
    <Container>
        <div class="info-box">
            <AvatarBig src={user.avatar} link=""></AvatarBig>
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
                <TestCard
                    author="Иван Иванов"
                    createdAt="01.01.2023"
                    id="1"
                    timesPassed={256}
                    title="Кто ты из слова пацана"
                ></TestCard>
                <TestCard
                    author="Иван Иванов"
                    createdAt="01.01.2023"
                    id="1"
                    timesPassed={256}
                    title="Кто ты из слова пацана"
                ></TestCard>
                <TestCard
                    author="Иван Иванов"
                    createdAt="01.01.2023"
                    id="1"
                    timesPassed={256}
                    title="Кто ты из слова пацана"
                ></TestCard>
                <TestCard
                    author="Иван Иванов"
                    createdAt="01.01.2023"
                    id="1"
                    timesPassed={256}
                    title="Кто ты из слова пацана"
                ></TestCard>
                <TestCard
                    author="Иван Иванов"
                    createdAt="01.01.2023"
                    id="1"
                    timesPassed={256}
                    title="Кто ты из слова пацана"
                ></TestCard>
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
