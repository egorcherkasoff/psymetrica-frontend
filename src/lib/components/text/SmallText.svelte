<script lang="ts">
</script>

<span class="small-text">
    <slot />
</span>

<style lang="scss">
    @import "../../styles/index";

    .small-text {
        font-family: $secondaryFontFamily;
        font-weight: $smallFontWeight;
        font-size: $smallFontSize;
        color: $textColor;
    }
</style>
