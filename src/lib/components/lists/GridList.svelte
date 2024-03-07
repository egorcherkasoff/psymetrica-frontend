<script lang="ts">
</script>

<div class="grid-list">
    <slot />
</div>

<style lang="scss">
    .grid-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 15px;
        column-gap: 15px;
    }

    @media screen and (max-width: 992px) {
        .grid-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 576px) {
        .grid-list {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
