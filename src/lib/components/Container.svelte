<script lang="ts">
</script>

<div class="container">
    <slot />
</div>

<style lang="scss">
    .container {
        height: 100%;
        margin: 0 auto;
        max-width: 1400px;
        width: 100%;
    }

    @media (max-width: 1400px) {
        .container {
            padding: 0 10px 0 10px;
        }
    }

    @media (max-width: 1200px) {
    }

    @media (max-width: 992px) {
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
