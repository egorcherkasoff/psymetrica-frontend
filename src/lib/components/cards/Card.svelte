<script lang="ts">
</script>

<div class="card">
    <slot />
</div>

<style lang="scss">
    @import "../../styles/index";

    .card {
        padding: 15px;
        border: 1px solid $formBorderColor;
        border-radius: 8px;
    }
</style>
