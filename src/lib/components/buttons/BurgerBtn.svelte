<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const buttonEvent = () => {
        dispatch("click");
    };
</script>

<button type="button" class="burger" on:click={buttonEvent}>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
</button>

<style lang="scss">
    @import "../../styles/index";

    .burger {
        background: transparent;
        outline: none;
        border: 0;
        &:active {
            outline: none;
        }
        cursor: pointer;
        margin-right: 40px;
        &__line {
            display: block;
            width: 48px;
            height: 8px;
            border-radius: 8px;
            background-color: $primaryColor;
            &:first-child {
                margin-bottom: 8px;
            }
            &:last-child {
                margin-top: 8px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .burger {
            margin-right: 30px;
            &__line {
                &:first-child {
                    margin-bottom: 6px;
                }
                &:last-child {
                    margin-top: 6px;
                }
            }
        }
    }
    @media screen and (max-width: 576px) {
        .burger {
            margin-right: 20px;
            &__line {
                height: 7px;
                &:first-child {
                    margin-bottom: 5px;
                }
                &:last-child {
                    margin-top: 5px;
                }
            }
        }
    }
</style>
