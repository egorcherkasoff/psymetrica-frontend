<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import Filter from "$lib/components/Filter.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import TextInput from "$lib/components/inputs/TextInput.svelte";
    import DropDown from "$lib/components/inputs/DropDown.svelte";
    import GridList from "$lib/components/lists/GridList.svelte";
    import TestCard from "$lib/components/cards/TestCard.svelte";
    import PaginationGroup from "$lib/components/navigation/PaginationGroup.svelte";
    import PageBtn from "$lib/components/buttons/PageBtn.svelte";
    import { page } from "$app/stores";
    import { type Pagination, type TestListItem } from "$lib/types";

    const tests: TestListItem[] = $page.data.results as TestListItem[];
    const pagination: Pagination = {
        count: $page.data.count,
        next: $page.data.next,
        previous: $page.data.previous,
    };
</script>

<svelte:head>
    <title>Тесты | Psymetrica</title>
</svelte:head>

<main class="main">
    <Container>
        <HeadlineText>
            <h1>Тесты</h1>
        </HeadlineText>
        <div class="filter">
            <Filter>
                <TextInput
                    name="title"
                    placeholder="Введите название теста..."
                    fieldName="Название"
                ></TextInput>
                <TextInput
                    name="author"
                    placeholder="Введите имя автора..."
                    fieldName="Автор"
                ></TextInput>
                <DropDown
                    fieldName="Категория"
                    placeholder="Выберите категорию..."
                >
                    <option value="123123">123123</option>
                    <option value="123123">123123</option>
                    <option value="123123">123123</option>
                </DropDown>
            </Filter>
        </div>
        <div class="tests-box">
            <GridList>
                {#if tests && tests.length > 0}
                    {#each tests as test}
                        <TestCard
                            author={test.author}
                            createdAt={test.created_at}
                            id={test.id}
                            timesPassed={256}
                            title={test.title}
                        ></TestCard>
                    {:else}
                        <p>Нет доступных тестов</p>
                    {/each}
                {/if}
            </GridList>
            <div class="pagination">
                {#if pagination && pagination.count > 1}
                    <PaginationGroup>
                        {#if pagination.previous && pagination.previous !== null}
                            <PageBtn>&lsaquo;</PageBtn>
                        {/if}
                        <PageBtn isActive={true}>1</PageBtn>
                        {#if pagination.next && pagination.next !== null}
                            <PageBtn>&rsaquo;</PageBtn>
                        {/if}
                    </PaginationGroup>
                {/if}
            </div>
        </div>
    </Container>
</main>

<style lang="scss">
    .filter {
        margin-top: 15px;
    }
    .main {
        padding-top: 160px;
    }
    .tests-box {
        margin-top: 30px;
    }
    .pagination {
        margin-top: 30px;
    }
</style>
