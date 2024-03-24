<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import Card from "$lib/components/cards/Card.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import HorizonatalDivider from "$lib/components/body/HorizontalDivider.svelte";
    import BodyText from "$lib/components/text/BodyText.svelte";
    import DefaultBtn from "$lib/components/buttons/DefaultBtn.svelte";
    import SignText from "$lib/components/text/SignText.svelte";
    import Filter from "$lib/components/Filter.svelte";
    import TextInput from "$lib/components/inputs/TextInput.svelte";
    import DatePicker from "$lib/components/inputs/DatePicker.svelte";
    import ZebraList from "$lib/components/lists/ZebraList.svelte";
    import AttemptCard from "$lib/components/cards/AttemptCard.svelte";
    import PaginationGroup from "$lib/components/navigation/PaginationGroup.svelte";
    import PageBtn from "$lib/components/buttons/PageBtn.svelte";
    import Checkbox from "$lib/components/inputs/Checkbox.svelte";
</script>

<svelte:head>
    <title>Прохождения теста Кто ты из слова пацана? | Psymetrica</title>
</svelte:head>

<main class="main mt-header">
    <Container>
        <div class="test">
            <div class="test__title">
                <HeadlineText
                    >Кто ты из слова пацана? | Прохождения теста</HeadlineText
                >
            </div>
            <HorizonatalDivider></HorizonatalDivider>
        </div>
        <div class="filter">
            <Filter>
                <TextInput
                    name="user"
                    placeholder="Имя пользователя"
                    fieldName="Имя пользователя"
                ></TextInput>
                <DatePicker fieldName="Дата прохождения от"></DatePicker>
                <DatePicker fieldName="Дата прохождения до"></DatePicker>
            </Filter>
        </div>
        <div class="attempts">
            <ZebraList>
                <AttemptCard
                    user="Иван Иванов"
                    id="wdasdas"
                    createdAt="02.03.2024"
                ></AttemptCard>
                <AttemptCard
                    user="Иван Иванов"
                    id="wdasdas"
                    createdAt="02.03.2024"
                ></AttemptCard>
                <AttemptCard
                    user="Иван Иванов"
                    id="wdasdas"
                    createdAt="02.03.2024"
                ></AttemptCard>
                <AttemptCard
                    user="Иван Иванов"
                    id="wdasdas"
                    createdAt="02.03.2024"
                ></AttemptCard>
            </ZebraList>
            <div class="attempts__navigation">
                <PaginationGroup>
                    <PageBtn>&lsaquo;</PageBtn>
                    <PageBtn>1</PageBtn>
                    <PageBtn>2</PageBtn>
                    <PageBtn isActive={true}>3</PageBtn>
                </PaginationGroup>
            </div>
        </div>
    </Container>
</main>

<style lang="scss">
    @import "../../../../lib/styles/index.scss";

    .test {
        max-width: 600px;
        &__title {
            margin-bottom: 15px;
        }
    }

    .filter {
        margin-top: 30px;
    }

    .attempts {
        margin-top: 30px;
        &__navigation {
            margin-top: 30px;
        }
    }
</style>
