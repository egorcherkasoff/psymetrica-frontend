<script lang="ts">
    import SignText from "$lib/components/text/SignText.svelte";
    import { createEventDispatcher } from "svelte";

    export let id: string;

    const dispatch = createEventDispatcher();

    const checkboxEvent = () => {
        dispatch("click");
    };
</script>

<div class="checkbox">
    <input type="checkbox" {id} on:change={checkboxEvent} />
    <label for={id}><SignText><slot /></SignText></label>
</div>

<style lang="scss">
    .checkbox {
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
