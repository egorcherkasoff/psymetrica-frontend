<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.css";
    export let title: string = "";
    export let icon: string;
    export let isDelete: boolean = false;
</script>

<div class="icon-btn">
    <!-- слот для произвольного текста -->
    <slot />
    <button type="button" {title} class={!isDelete ? "" : "remove"}>
        <i class="{icon} fa-solid"></i>
    </button>
</div>

<style lang="scss">
    @import "../../styles/index";

    .icon-btn {
        display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;

        & button {
            margin-left: 10px;
            height: 30px;
            width: 30px;
            cursor: pointer;
            border-radius: 8px;
            border: 1px solid $formBorderColor;
            color: #fff;
            background-color: $navigationColor;
            font-family: $secondaryFontFamily;
            font-size: $bodyFontSize;
            font-weight: $bodyFontWeight;
            & i {
                color: $iconColor;
            }
            &.remove {
                background-color: red;
                border: 1px solid transparent;
                & i {
                    color: #fff;
                }
            }
        }
    }

    @media screen and (max-width: 992px) {
    }

    @media screen and (max-width: 576px) {
    }
</style>
