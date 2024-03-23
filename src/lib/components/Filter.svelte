<script lang="ts">
    import { slide } from "svelte/transition";
    import DefaultBtn from "./buttons/DefaultBtn.svelte";
    import OutlinedBtn from "./buttons/OutlinedBtn.svelte";
    import Card from "./cards/Card.svelte";
    let isActive: boolean;
    $: isActive = false;

    function showFilter() {
        isActive = !isActive;
    }
</script>

{#if !isActive}
    <div class="filter-btn">
        <DefaultBtn type="button" text="Фильтр" on:click={showFilter}
        ></DefaultBtn>
    </div>
{:else}
    <div class="filter active" transition:slide>
        <Card>
            <div class="filter__fields">
                <slot />
            </div>
            <div class="fliter-btn">
                <OutlinedBtn
                    type="submit"
                    text="Сбросить фильтр"
                    on:click={showFilter}
                ></OutlinedBtn>
            </div>
        </Card>
    </div>
{/if}

<style lang="scss">
    .filter {
        &.active {
            max-width: 100%;
        }
        &-btn {
            max-width: 500px;
            width: 100%;
        }
    }
</style>
