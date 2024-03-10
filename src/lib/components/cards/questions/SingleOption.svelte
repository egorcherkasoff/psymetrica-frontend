<script lang="ts">
    import BodyText from "$lib/components/text/BodyText.svelte";
    import Card from "../Card.svelte";
    import RadioButton from "$lib/components/inputs/RadioButton.svelte";
</script>

<Card>
    <BodyText><p>Текст вопроса идет здесь....</p></BodyText>
    <div class="options">
        <RadioButton id="11" group="1">вариант 1</RadioButton>
        <RadioButton id="22" group="1">вариант 2</RadioButton>
        <RadioButton id="33" group="1">вариант 3</RadioButton>
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
