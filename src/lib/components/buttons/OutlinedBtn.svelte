<script lang="ts">
    export let text: string;
    export let type: HTMLButtonElement["type"];

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function buttonEvent() {
        dispatch("click");
    }
</script>

<div class="outlined-btn">
    <button {type} on:click={buttonEvent}>{text}</button>
</div>

<style lang="scss">
    @import "../../styles/index";

    .outlined-btn {
        width: 100%;

        & button {
            cursor: pointer;
            width: 100%;
            min-height: 40px;
            border-radius: 8px;
            border: 1px solid $primaryColor;
            color: $primaryColor;
            background-color: transparent;
            font-family: $secondaryFontFamily;
            font-size: $bodyFontSize;
            font-weight: $bodyFontWeight;
        }
    }
    @media screen and (max-width: 992px) {
        .outlined-btn {
            & button {
                min-height: 35px;

                font-size: 16px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .outlined-btn {
            & button {
                min-height: 30px;
            }
        }
    }
</style>
