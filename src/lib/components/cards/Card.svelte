<script lang="ts">
    export let isFullWidth: boolean = false;
</script>

<div class="card {isFullWidth ? 'max' : ''}">
    <slot />
</div>

<style lang="scss">
    @import "../../styles/index";

    .card {
        overflow: visible;
        padding: 15px;
        border: 1px solid $formBorderColor;
        border-radius: 8px;
        background-color: $tableColor;
        &.max {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        .card {
            padding: 10px;
        }
    }
</style>
