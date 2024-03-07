<script lang="ts">
    export let link: string = "";
</script>

<span class="body-text">
    {#if link === ""}
        <slot />
    {:else}
        <a href={link}><slot /></a>
    {/if}
</span>

<style lang="scss">
    @import "../../styles/index";

    .body-text {
        font-family: $secondaryFontFamily;
        font-weight: $bodyFontWeight;
        font-size: $bodyFontSize;
        color: $textColor;
        & a {
            text-decoration: none;
            font-family: inherit;
            font-weight: inherit;
            font-size: inherit;
            color: inherit;
        }
    }
</style>
