<script lang="ts">
</script>

<span class="body-text">
    <slot />
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
