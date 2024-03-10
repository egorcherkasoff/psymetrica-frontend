<script lang="ts">
    import BodyText from "$lib/components/text/BodyText.svelte";
    import Card from "../Card.svelte";
    import TextArea from "$lib/components/inputs/TextArea.svelte";
</script>

<Card>
    <BodyText><p>Здесь идет текст вопроса...</p></BodyText>
    <div class="answer">
        <TextArea placeholder="Введите ваш ответ..." fieldName="Ваш ответ"
        ></TextArea>
    </div>
</Card>

<style lang="scss">
</style>
