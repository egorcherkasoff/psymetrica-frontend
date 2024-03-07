<script lang="ts">
    export let title: string;
    import SubHeadlineText from "../text/SubHeadlineText.svelte";
    export let isActive: boolean = false;
</script>

<div class="tab {isActive ? 'active' : ''}">
    <SubHeadlineText>{title}</SubHeadlineText>
</div>

<style lang="scss">
    @import "../../styles/index";

    .tab {
        padding-bottom: 2px;
        margin-right: 15px;
        cursor: pointer;
        border-bottom: 4px solid transparent;
        &.active {
            border-bottom: 4px solid $primaryColor;
        }
    }

    @media screen and (max-width: 768px) {
        .tab {
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 576px) {
        .tab {
            width: min-content;
        }
    }
</style>
