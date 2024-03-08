<script lang="ts">
    export let isInFooter: boolean = false;
    export let link: string = "";
</script>

<span class="h2-text {isInFooter ? 'footer' : ''}">
    {#if link === ""}
        <slot />
    {:else}
        <a href={link}><slot /></a>
    {/if}
</span>

<style lang="scss">
    @import "../../styles/index";

    .h2-text {
        font-family: $primaryFontFamily;
        font-weight: $h2FontWeight;
        font-size: $h2FontSize;
        color: $headerColor;
        & a {
            text-decoration: none;
            font-family: inherit;
            font-weight: inherit;
            font-size: inherit;
            color: inherit;
        }
        &.footer {
            color: #fff;
        }
    }

    @media screen and (max-width: 992px) {
        .h2-text {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 576px) {
        .h2-text {
            font-size: 18px;
        }
    }
</style>
