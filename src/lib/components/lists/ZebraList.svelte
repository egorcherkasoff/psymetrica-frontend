<script lang="ts">
</script>

<div class="zebra">
    <ul class="zebra__list">
        <slot />
    </ul>
</div>

<style lang="scss">
    @import "../../styles/index";

    .zebra {
        &__list {
            & li {
                &:nth-child(even) {
                    background-color: #f9f9f9;
                }
                &:nth-child(odd) {
                    background-color: #fff;
                }
            }
        }
    }

    @media screen and (max-width: 992px) {
    }

    @media screen and (max-width: 576px) {
    }
</style>
