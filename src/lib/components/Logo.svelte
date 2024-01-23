<script lang="ts">
    import { Theme } from "$lib/types";

    export let text: String = "Psymetrica";
    export let theme: Theme;
</script>

<logo class="logo">
    <span class="logo__text logo__text_{theme}">{text}</span>
</logo>

<style lang="scss">
    @import "../styles/index";

    .logo__text {
        font-family: $primaryFontFamily;
        font-weight: $logoFontWeight;
        font-size: $logoFontSize;
        text-decoration: none;
        &_primary {
            color: $primaryColor;
        }
        &_secondary {
            color: #ffffff;
        }
        &_dark {
            color: $textColor;
        }
    }

    @media (max-width: 576px) {
        .logo__text {
            font-size: 24px;
        }
    }
    @media (max-width: 768px) {
        .logo__text {
            font-size: 24px;
        }
    }
    @media (max-width: 992px) {
        .logo__text {
            font-size: 36px;
        }
    }
    @media (max-width: 1200px) {
        .logo__text {
            font-size: 48px;
        }
    }
</style>
