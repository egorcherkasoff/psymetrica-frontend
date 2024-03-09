<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import Card from "$lib/components/cards/Card.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import HorizonatalDivider from "$lib/components/body/HorizontalDivider.svelte";
    import BodyText from "$lib/components/text/BodyText.svelte";
    import OutlinedBtn from "$lib/components/buttons/OutlinedBtn.svelte";
    import SignText from "$lib/components/text/SignText.svelte";
</script>

<main class="main">
    <Container>
        <div class="test">
            <div class="test__title">
                <HeadlineText>Тест завершен</HeadlineText>
            </div>
            <HorizonatalDivider></HorizonatalDivider>
            <div class="test__bye">
                <BodyText>
                    <p>
                        Текст после завершение теста Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Perferendis cupiditate
                        suscipit aliquam enim repudiandae dolorum adipisci qui
                        alias, sequi dolores, facilis odit, aut eveniet. Nam
                        recusandae nulla aut sapiente sint!
                    </p>
                </BodyText>
            </div>
            <OutlinedBtn text="Далее"></OutlinedBtn>
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
        margin: 0 auto;
        &__title {
            margin-bottom: 15px;
        }
        &__bye {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        &__question-count {
            margin: 15px 0 15px 0;
        }
    }
</style>
