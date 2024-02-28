<script lang="ts">
</script>

<span class="small-text">
    <slot />
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
