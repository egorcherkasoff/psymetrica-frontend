<script lang="ts">
    import SignText from "$lib/components/text/SignText.svelte";
    export let id: string;
    export let group: string;
    export let isWithLabel: boolean = true;
</script>

<div class="radio">
    <input type="radio" {id} name={group} />
    {#if isWithLabel}
        <label for={id}><SignText><slot /></SignText></label>
    {/if}
</div>

<style lang="scss">
    .radio {
        display: flex;
        align-items: center;
        justify-content: start;
        label {
            margin-left: 10px;
            cursor: pointer;
            user-select: none;
        }
    }
</style>
