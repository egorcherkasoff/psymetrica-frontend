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
    import GeneralInfo from "$lib/components/cards/constructor/GeneralInfo.svelte";
    import StarterPage from "$lib/components/cards/constructor/StarterPage.svelte";
    import FinishPage from "$lib/components/cards/constructor/FinishPage.svelte";
    import BlockList from "$lib/components/cards/constructor/BlockList.svelte";
</script>

<main class="main">
    <Container>
        <div class="constructor">
            <div class="constructor__general">
                <GeneralInfo></GeneralInfo>
                <StarterPage></StarterPage>
                <FinishPage></FinishPage>
                <BlockList></BlockList>
            </div>
            <div class="constructor__questions"></div>
        </div>
    </Container>
</main>

<style lang="scss">
    .main {
        padding-top: 160px;
    }
</style>
