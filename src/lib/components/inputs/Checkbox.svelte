<script lang="ts">
    import SignText from "$lib/components/text/SignText.svelte";
    export let id: string;
</script>

<div class="checkbox">
    <input type="checkbox" {id} />
    <label for={id}><SignText><slot /></SignText></label>
</div>

<style lang="scss">
    .checkbox {
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
