<script lang="ts">
    import BodyText from "$lib/components/text/BodyText.svelte";
    import Card from "../Card.svelte";
    import ImagePicker from "$lib/components/inputs/ImagePicker.svelte";
</script>

<Card>
    <BodyText><p>Текст вопроса идет здесь....</p></BodyText>
    <div class="options">
        <ImagePicker
            id="343434"
            imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/1613216892_42-p-fon-temno-sinii-abstraktsiya-52.jpg"
        ></ImagePicker>

        <ImagePicker
            id="34343"
            imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/1613216892_42-p-fon-temno-sinii-abstraktsiya-52.jpg"
        ></ImagePicker>
        <ImagePicker
            id="34344"
            imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/1613216892_42-p-fon-temno-sinii-abstraktsiya-52.jpg"
        ></ImagePicker>
        <ImagePicker
            id="3434"
            imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/1613216892_42-p-fon-temno-sinii-abstraktsiya-52.jpg"
        ></ImagePicker>
    </div>
</Card>

<style lang="scss">
    .options {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        grid-auto-flow: row dense;
        row-gap: 15px;
        column-gap: 15px;
        margin-top: 30px;
    }

    @media screen and (max-width: 992px) {
        .options {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 768px) {
        .options {
            grid-template-columns: 1fr;
        }
    }
</style>
