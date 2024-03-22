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
    import SubHeadlineText from "$lib/components/text/SubHeadlineText.svelte";
    import Card from "../Card.svelte";
    import BlockListItem from "./BlockListItem.svelte";
</script>

<Card>
    <div class="test-blocks">
        <div class="test-blocks__title">
            <HeadlineText
                ><h1>
                    <a href="/tests/1212" class="test-blocks__link"
                        >Кто ты из слова пацана</a
                    > | Редактирование
                </h1></HeadlineText
            >
            <HorizontalDivider></HorizontalDivider>
        </div>
        <div class="test-blocks__info">
            <IconButton icon="fa-pencil" title="Редактировать">
                <SubHeadlineText><h2>Описание теста</h2></SubHeadlineText>
            </IconButton>
            <BodyText
                ><p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla voluptate nihil aspernatur cum officia laboriosam
                    rerum recusandae. Dolorem totam repudiandae expedita
                    distinctio facere quod laborum amet quo, nihil sit
                    reiciendis?
                </p></BodyText
            >
            <div class="test-blocks__checkbox">
                <Checkbox id="publicResults"
                    >Показывать результаты пользователю</Checkbox
                >
            </div>
        </div>
        <div class="test-blocks__list">
            <SubHeadlineText><h2>Список блоков</h2></SubHeadlineText>
            <ZebraList>
                <BlockListItem></BlockListItem>
                <BlockListItem></BlockListItem>
                <BlockListItem></BlockListItem>
            </ZebraList>
        </div>
    </div>
</Card>

<style lang="scss">
    @import "../../../styles/index";

    .test-blocks {
        &__title {
            max-width: 800px;
            width: 100%;
            & h1 {
                margin-bottom: 15px;
            }
        }
        &__link {
            text-decoration: none;
            color: $primaryColor;
        }
        &__list {
            margin-top: 15px;
        }
        &__info {
            margin-top: 15px;
            max-width: 800px;
            width: 100%;
            & h2 {
                margin-bottom: 5px;
            }
        }
        &__checkbox {
            margin-top: 5px;
            width: 100%;
        }
    }
</style>
