<script lang="ts">
    export let text: String;
</script>

<span class="h1-text">
    {text}
</span>

<style lang="scss">
    @import "../../styles/index";

    .h1-text {
        font-family: $primaryFontFamily;
        font-weight: $h1FontWeight;
        font-size: $h1FontSize;
        color: $headerColor;
    }
</style>
