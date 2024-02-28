<script lang="ts">
</script>

<span class="sign-text">
    <slot />
</span>

<style lang="scss">
    @import "../../styles/index";

    .sign-text {
        font-family: $secondaryFontFamily;
        font-weight: $subtitleFontWeight;
        font-size: $subtitleFontSize;
        color: $textColor;
    }
</style>
