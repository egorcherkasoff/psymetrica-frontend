<script lang="ts">
    export let isError: boolean = false;
</script>

<span class="sign-text {!isError ? '' : 'error'}">
    <slot />
</span>

<style lang="scss">
    @import "../../styles/index";

    .sign-text {
        font-family: $secondaryFontFamily;
        font-weight: $subtitleFontWeight;
        font-size: $subtitleFontSize;
        color: $textColor;
        &.error {
            color: $errorColor;
        }
    }
</style>
