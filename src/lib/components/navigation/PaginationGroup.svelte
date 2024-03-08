<script lang="ts">
</script>

<div class="pagination">
    <slot />
</div>

<style lang="scss">
    @import "../../styles/index";

    .pagination {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid $formBorderColor;
        width: min-content;
    }
</style>
