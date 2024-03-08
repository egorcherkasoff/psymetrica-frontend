<script lang="ts">
    import BodyText from "../text/BodyText.svelte";
    export let isActive: boolean = false;
</script>

<div class="page-btn {isActive ? 'active' : ''}">
    <BodyText>
        <slot />
    </BodyText>
</div>

<style lang="scss">
    @import "../../styles/index";

    .page-btn {
        cursor: pointer;
        margin: 0 10px 0 10px;
        border-bottom: 2px solid transparent;
        border-top: 2px solid transparent;

        &:hover {
            color: $primaryColor;
        }
        &:last-child {
            margin-right: 0;
        }
        &:first-child {
            margin-left: 0;
        }
        &.active {
            border-bottom: 2px solid $iconColor;
        }
    }
</style>
