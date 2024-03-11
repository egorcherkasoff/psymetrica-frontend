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
</script>

<main class="main">
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
                    placeholder="Имя пользователя"
                    fieldName="Имя пользователя"
                ></TextInput>
                <DatePicker fieldName="Дата прохождения от"></DatePicker>
                <DatePicker fieldName="Дата прохождения до"></DatePicker>
            </Filter>
        </div>
        <div class="attempts">
            <ZebraList></ZebraList>
        </div>
    </Container>
</main>

<style lang="scss">
    @import "../../../../lib/styles/index.scss";

    .main {
        padding-top: 160px;
    }

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
    }
</style>
