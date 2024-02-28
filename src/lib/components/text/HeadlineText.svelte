<script lang="ts">
</script>

<span class="h1-text">
    <slot />
</span>

<style lang="scss">
    @import "../../styles/index";

    .h1-text {
        font-family: $primaryFontFamily;
        font-weight: $h1FontWeight;
        font-size: $h1FontSize;
        color: $headerColor;
    }

    @media screen and (max-width: 992px) {
        .h1-text {
            font-size: 28px;
        }
    }

    @media screen and (max-width: 576px) {
        .h1-text {
            font-size: 24px;
        }
    }
</style>
