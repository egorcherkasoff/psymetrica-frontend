<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import Card from "$lib/components/cards/Card.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import HorizonatalDivider from "$lib/components/body/HorizontalDivider.svelte";
    import BodyText from "$lib/components/text/BodyText.svelte";
    import DefaultBtn from "$lib/components/buttons/DefaultBtn.svelte";
    import SignText from "$lib/components/text/SignText.svelte";
</script>

<main class="main">
    <Container>
        <div class="test">
            <div class="test__title">
                <HeadlineText>Кто ты из слова пацана?</HeadlineText>
            </div>
            <HorizonatalDivider></HorizonatalDivider>
            <div class="test__welcome">
                <BodyText>
                    <p>
                        Приветственный текст Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. In labore quasi odio eius
                        ipsa laborum quam ut nihil itaque rerum quia obcaecati
                        ducimus impedit, minima sunt modi repudiandae numquam
                        velit!
                    </p>
                </BodyText>
            </div>
            <div class="test__question-count">
                <SignText>
                    <p>Тест содержит 30 вопросов.</p>
                </SignText>
            </div>
            <DefaultBtn text="Начать тест"></DefaultBtn>
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
        &__welcome {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        &__question-count {
            margin: 15px 0 15px 0;
        }
    }
</style>
