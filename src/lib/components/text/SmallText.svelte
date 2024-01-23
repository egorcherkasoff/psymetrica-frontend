<script lang="ts">
    export let text: String;
</script>

<span class="small-text">
    {text}
</span>

<style lang="scss">
    @import "../../styles/index";

    .small-text {
        font-family: $secondaryFontFamily;
        font-weight: $bodyFontWeight;
        font-size: $bodyFontSize;
        color: $textColor;
    }
</style>
