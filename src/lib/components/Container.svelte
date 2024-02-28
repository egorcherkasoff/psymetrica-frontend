<script lang="ts">
</script>

<div class="container">
    <slot />
</div>

<style lang="scss">
    .container {
        height: 100%;
        max-width: 1400px;
        margin: 0 auto;
    }

    @media (max-width: 1400px) {
        .container {
            padding: 0 10px 0 10px;
        }
    }

    @media (max-width: 1200px) {
        .container {
            padding: 0 10px 0 10px;
        }
    }

    @media (max-width: 992px) {
        .container {
            padding: 0 10px 0 10px;
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 5px 0 5px;
        }
    }

    @media (max-width: 576px) {
        .container {
            max-width: 100%;
        }
    }
</style>
