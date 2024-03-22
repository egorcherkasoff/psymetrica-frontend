<script lang="ts">
    import HorizontalDivider from "$lib/components/body/HorizontalDivider.svelte";
    import InputGroupVertical from "$lib/components/body/InputGroupVertical.svelte";
    import DefaultBtn from "$lib/components/buttons/DefaultBtn.svelte";
    import IconButton from "$lib/components/buttons/IconButton.svelte";
    import OutlinedBtn from "$lib/components/buttons/OutlinedBtn.svelte";
    import Checkbox from "$lib/components/inputs/Checkbox.svelte";
    import DropDown from "$lib/components/inputs/DropDown.svelte";
    import TextArea from "$lib/components/inputs/TextArea.svelte";
    import TextInput from "$lib/components/inputs/TextInput.svelte";
    import ZebraList from "$lib/components/lists/ZebraList.svelte";
    import BodyText from "$lib/components/text/BodyText.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import SignText from "$lib/components/text/SignText.svelte";
    import Card from "../Card.svelte";
</script>

<li class="test-block-item">
    <div class="test-block-item__info">
        <div class="test-block-item__number">
            <SignText><p>1</p></SignText>
        </div>
        <div class="test-block-item__title">
            <SignText><p>Название блока</p></SignText>
        </div>
    </div>
    <div class="test-block-item__controls">
        <IconButton icon="fa-pencil"
            ><SignText>Редактировать блок</SignText></IconButton
        >
        <IconButton icon="fa-trash" isDelete={true}
            ><SignText>Удалить блок</SignText></IconButton
        >
    </div>
</li>

<style lang="scss">
    @import "../../../styles/index";

    .test-block-item {
        box-sizing: border-box;
        padding: 15px 10px 15px 10px;
        border-radius: 8px;
        background-color: $tableColor;
        padding: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__number {
            margin-right: 10px;
        }
        &__divider {
            margin-top: 5px;
            margin-bottom: 5px;
            display: none;
        }
        &__link {
            text-decoration: none;
        }
        &__info {
            display: flex;
            justify-content: start;
            align-items: center;
            flex-wrap: nowrap;
        }
        &__controls {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            row-gap: 15px;
        }
        &:nth-child(even) {
            background-color: $tableColor;
        }
        &:nth-child(odd) {
            background-color: #fcfcfc;
        }
    }
</style>
