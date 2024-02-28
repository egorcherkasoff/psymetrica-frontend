<script lang="ts">
</script>

<span class="h2-text">
    <slot />
</span>

<style lang="scss">
    @import "../../styles/index";

    .h2-text {
        font-family: $primaryFontFamily;
        font-weight: $h2FontWeight;
        font-size: $h2FontSize;
        color: $headerColor;
    }
</style>
