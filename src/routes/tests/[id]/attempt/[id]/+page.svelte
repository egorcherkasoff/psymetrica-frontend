<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import HorizonatalDivider from "$lib/components/body/HorizontalDivider.svelte";
    import DefaultBtn from "$lib/components/buttons/DefaultBtn.svelte";
    import OutlinedBtn from "$lib/components/buttons/OutlinedBtn.svelte";
    import ProgressIndicator from "$lib/components/ProgressIndicator.svelte";
    import SingleOption from "$lib/components/cards/questions/SingleOption.svelte";
    import MultiOption from "$lib/components/cards/questions/MultiOption.svelte";
    import OpenOption from "$lib/components/cards/questions/OpenOption.svelte";
    import ScaleOption from "$lib/components/cards/questions/ScaleOption.svelte";
    import IntroOption from "$lib/components/cards/questions/IntroOption.svelte";
    import ImageOption from "$lib/components/cards/questions/ImageOption.svelte";
    import SingleMatrixOption from "$lib/components/cards/questions/SingleMatrixOption.svelte";
    import MultiMatrixOption from "$lib/components/cards/questions/MultiMatrixOption.svelte";
</script>

<main class="main">
    <Container>
        <div class="attempt">
            <div class="attempt__head">
                <div class="attempt__head-text">
                    <HeadlineText><h1>Кто ты из слова пацана?</h1></HeadlineText
                    >
                </div>
                <HorizonatalDivider></HorizonatalDivider>
                <div class="attempt__progress">
                    <ProgressIndicator max={30} progress={15}
                    ></ProgressIndicator>
                </div>
            </div>
            <div class="attempt__body">
                <SingleOption></SingleOption>
                <MultiOption></MultiOption>
                <ScaleOption></ScaleOption>
                <ImageOption></ImageOption>
                <IntroOption></IntroOption>
                <OpenOption></OpenOption>
                <SingleMatrixOption></SingleMatrixOption>
                <MultiMatrixOption></MultiMatrixOption>
            </div>
            <div class="attempt__buttons">
                <DefaultBtn text="Далее"></DefaultBtn>
                <OutlinedBtn text="Прекратить тест"></OutlinedBtn>
            </div>
        </div>
    </Container>
</main>

<style lang="scss">
    @import "../../../../../lib/styles/index.scss";

    .main {
        padding-top: 160px;
    }

    .attempt {
        &__head {
            max-width: 600px;
            &-text {
                margin-bottom: 15px;
            }
        }
        &__progress {
            margin-top: 15px;
        }
        &__body {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 15px;
            margin-top: 15px;
        }
        &__buttons {
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            column-gap: 15px;
            max-width: 600px;
        }
    }

    @media screen and (max-width: 576px) {
        .attempt__buttons {
            grid-template-columns: 1fr;
            row-gap: 15px;
            grid-template-rows: 1fr 1fr;
        }
    }
</style>
