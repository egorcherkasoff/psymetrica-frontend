<script lang="ts">
    import BodyText from "$lib/components/text/BodyText.svelte";
    import Card from "../Card.svelte";
    import ScaleInput from "$lib/components/inputs/ScaleInput.svelte";
</script>

<Card>
    <BodyText><p>Здесь идет текст вопроса...</p></BodyText>
    <div class="answer">
        <ScaleInput id="123" max={10} min={1}></ScaleInput>
    </div>
</Card>

<style lang="scss">
</style>
