<script lang="ts">
    import InputGroupVertical from "$lib/components/body/InputGroupVertical.svelte";
    import DefaultBtn from "$lib/components/buttons/DefaultBtn.svelte";
    import OutlinedBtn from "$lib/components/buttons/OutlinedBtn.svelte";
    import Checkbox from "$lib/components/inputs/Checkbox.svelte";
    import DropDown from "$lib/components/inputs/DropDown.svelte";
    import TextArea from "$lib/components/inputs/TextArea.svelte";
    import TextInput from "$lib/components/inputs/TextInput.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import Card from "../Card.svelte";
</script>

<Card>
    <div class="general-info">
        <div class="general-info__title">
            <HeadlineText
                ><h1>Создание теста | Основные параметры</h1></HeadlineText
            >
        </div>
        <InputGroupVertical>
            <TextInput
                placeholder="Введите название теста..."
                fieldName="Название теста"
            ></TextInput>
            <div class="general-info__textarea">
                <TextArea
                    placeholder="Введите описание теста..."
                    fieldName="Описание (Необязательно)"
                ></TextArea>
            </div>
            <DropDown
                placeholder="Выберите категорию теста..."
                fieldName="Категория теста"
            >
                <option value="11">Личностные характеристики</option>
                <option value="12">Профориентация</option>
                <option value="13">Другое</option>
            </DropDown>
            <div class="general-info__checkbox">
                <Checkbox id="publicResults"
                    >Показывать результаты пользователю</Checkbox
                >
            </div>
        </InputGroupVertical>
        <div class="general-info__buttons">
            <DefaultBtn text="Сохранить и продолжить"></DefaultBtn>
            <OutlinedBtn text="Отменить"></OutlinedBtn>
        </div>
    </div>
</Card>

<style lang="scss">
    .general-info {
        max-width: 800px;
        width: 100%;
        &__title {
            margin-bottom: 15px;
        }
        &__textarea {
            width: 100%;
        }
        &__checkbox {
            width: 100%;
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
