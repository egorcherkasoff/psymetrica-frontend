<script lang="ts">
    import DefaultBtn from "./buttons/DefaultBtn.svelte";
    import OutlinedBtn from "./buttons/OutlinedBtn.svelte";
    import Card from "./cards/Card.svelte";
    let isActive: boolean = false;
</script>

{#if isActive === false}
    <div class="filter-btn">
        <button on:click={() => (isActive = !isActive)}>123123</button>
        <DefaultBtn text="Фильтр"></DefaultBtn>
    </div>
{:else}
    <div class="filter active">
        <Card>
            <div class="filter__fields">
                <slot />
            </div>
            <div class="fliter-btn">
                <OutlinedBtn text="Сбросить фильтр"></OutlinedBtn>
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
