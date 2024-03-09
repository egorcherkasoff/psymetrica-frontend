<script lang="ts">
    import SignText from "$lib/components/text/SignText.svelte";
    export let id: string;
    export let group: string;
</script>

<div class="radio">
    <input type="radio" {id} name={group} />
    <label for={id}><SignText><slot /></SignText></label>
</div>

<style lang="scss">
    .radio {
        display: flex;
        align-items: center;
        justify-content: start;
        input {
        }
        label {
            margin-left: 10px;
            cursor: pointer;
            user-select: none;
        }
    }
</style>
