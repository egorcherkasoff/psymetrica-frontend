<script lang="ts">
    export let text: String;
</script>

<span class="sign-text">
    {text}
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
