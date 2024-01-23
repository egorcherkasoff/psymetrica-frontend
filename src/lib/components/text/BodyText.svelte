<script lang="ts">
    export let text: String;
</script>

<span class="body-text">
    {text}
</span>

<style lang="scss">
    @import "../../styles/index";

    .body-text {
        font-family: $secondaryFontFamily;
        font-weight: $smallFontWeight;
        font-size: $smallFontSize;
        color: $textColor;
    }
</style>
