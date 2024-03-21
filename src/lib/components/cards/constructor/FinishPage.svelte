<script lang="ts">
    import InputGroupVertical from "$lib/components/body/InputGroupVertical.svelte";
    import DefaultBtn from "$lib/components/buttons/DefaultBtn.svelte";
    import OutlinedBtn from "$lib/components/buttons/OutlinedBtn.svelte";
    import Checkbox from "$lib/components/inputs/Checkbox.svelte";
    import DropDown from "$lib/components/inputs/DropDown.svelte";
    import TextArea from "$lib/components/inputs/TextArea.svelte";
    import TextInput from "$lib/components/inputs/TextInput.svelte";
    import BodyText from "$lib/components/text/BodyText.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import Card from "../Card.svelte";
</script>

<Card>
    <div class="finisher-page">
        <div class="finisher-page__intro">
            <HeadlineText
                ><h1>Финальная страница | Необязательно</h1></HeadlineText
            >
            <div class="finisher-page__intro-desc">
                <BodyText
                    ><p>
                        Содержимое этой страницы будет отображено пользователю
                        после окончания прохождения теста. Если вы не укажете
                        ничего, пользователю будет показан стандартный блок.
                    </p></BodyText
                >
            </div>
        </div>
        <div class="finisher-page__info">
            <TextArea
                placeholder="Введите заголовок финальной страницы..."
                fieldName="Заголовок"
            ></TextArea>
            <TextArea
                placeholder="Введите описание финальной страницы..."
                fieldName="Описание"
            ></TextArea>
        </div>
        <div class="finisher-page__buttons">
            <DefaultBtn text="Сохранить"></DefaultBtn>
            <OutlinedBtn text="Не сохранять"></OutlinedBtn>
        </div>
    </div>
</Card>

<style lang="scss">
    .finisher-page {
        &__intro {
            max-width: 800px;
            width: 100%;
            &-desc {
                margin-top: 15px;
            }
        }
        &__info {
            margin-top: 15px;
        }
        &__buttons {
            margin-top: 15px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            column-gap: 15px;
            max-width: 600px;
        }
    }
</style>
