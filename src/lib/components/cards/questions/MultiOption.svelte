<script lang="ts">
    import BodyText from "$lib/components/text/BodyText.svelte";
    import Card from "../Card.svelte";
    import Checkbox from "$lib/components/inputs/Checkbox.svelte";
</script>

<Card>
    <BodyText><p>Текст вопроса идет здесь....</p></BodyText>
    <div class="options">
        <Checkbox id="1">вариант 1</Checkbox>
        <Checkbox id="2">вариант 2</Checkbox>
        <Checkbox id="3">вариант 3</Checkbox>
    </div>
</Card>

<style lang="scss">
    .options {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 15px;
        column-gap: 15px;
        margin-top: 30px;
    }
</style>
