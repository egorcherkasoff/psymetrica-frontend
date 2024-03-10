<script lang="ts">
    import SignText from "$lib/components/text/SignText.svelte";
    export let id: string;
    export let max: number;
    export let min: number;
</script>

<div class="range">
    <input type="range" {id} {max} {min} step="1" />
</div>

<style lang="scss">
    @import "../../styles/index";

    .range {
        display: flex;
        align-items: center;
        justify-content: start;
        input {
            overflow: hidden;
            max-width: 600px;
            width: 100%;
            accent-color: $primaryColor;
            &::-webkit-slider-thumb {
                background: red;
            }
        }
    }
</style>
