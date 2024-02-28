<script lang="ts">
</script>

<div class="card">
    <slot />
</div>

<style lang="scss">
    @import "../../styles/index";

    .card {
        overflow: visible;
        width: 100%;
        padding: 15px;
        border: 1px solid $formBorderColor;
        border-radius: 8px;
    }

    @media screen and (max-width: 768px) {
        .card {
            padding: 10px;
        }
    }
</style>
