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
</script>

<main class="main">
    <Container>
        <HeadlineText>
            <h1>Тесты</h1>
        </HeadlineText>
        <Filter>
            <TextInput
                placeholder="Введите название теста..."
                fieldName="Название"
            ></TextInput>
            <TextInput placeholder="Введите имя автора..." fieldName="Автор"
            ></TextInput>
            <DropDown fieldName="Категория" placeholder="Выберите категорию...">
                <option value="123123">123123</option>
                <option value="123123">123123</option>
                <option value="123123">123123</option>
            </DropDown>
        </Filter>
        <div class="tests-box">
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
            <div class="pagination">
                <PaginationGroup>
                    <PageBtn>&lsaquo;</PageBtn>
                    <PageBtn>1</PageBtn>
                    <PageBtn isActive={true}>2</PageBtn>
                </PaginationGroup>
            </div>
        </div>
    </Container>
</main>

<style lang="scss">
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
