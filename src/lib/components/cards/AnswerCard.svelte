<script lang="ts">
    import HorizontalDivider from "../body/HorizontalDivider.svelte";
    import BodyText from "../text/BodyText.svelte";

    export let id: string;
    export let user: string;
    export let createdAt: string;
</script>

<li class="attempt">
    <a href="attempts/{id}" class="attempt__link"><BodyText>{user}</BodyText></a
    >
    <div class="attempt__divider">
        <HorizontalDivider></HorizontalDivider>
    </div>
    <a href="attempts/{id}" class="attempt__link"
        ><BodyText>{createdAt}</BodyText></a
    >
</li>

<style lang="scss">
    @import "../../styles/index";

    .attempt {
        border-radius: 8px;
        background-color: $tableColor;
        padding: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__divider {
            display: none;
        }
        &__link {
            text-decoration: none;
        }
        &:nth-child(even) {
            background-color: $tableColor;
        }
        &:nth-child(odd) {
            background-color: #fcfcfc;
        }
    }

    @media screen and (max-width: 992px) {
    }

    @media screen and (max-width: 576px) {
        .attempt {
            &__divider {
                display: block;
            }
        }
    }
</style>
