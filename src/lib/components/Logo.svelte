<script lang="ts">
    export let isInFooter: boolean = false;
</script>

<a href="/" class="logo-link">
    <span class="logo {isInFooter ? 'footer' : ''}">Psymetrica</span>
</a>

<style lang="scss">
    @import "../styles/index";

    .logo {
        font-family: $primaryFontFamily;
        font-weight: $logoFontWeight;
        font-size: $logoFontSize;
        color: $primaryColor;
        text-decoration: none;
        &-link {
            text-decoration: none;
        }
        &.footer {
            color: #fff;
        }
    }

    // TODO: add hover

    // медиа запросы
    @media screen and (max-width: 992px) {
        .logo {
            font-size: 36px;
        }
    }

    @media screen and (max-width: 768px) {
        .logo {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 576px) {
        .logo {
            font-size: 24px;
        }
    }
</style>
