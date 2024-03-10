<script lang="ts">
    import SignText from "$lib/components/text/SignText.svelte";
    export let id: string;
    export let imgUrl: string;
</script>

<div class="checkbox">
    <input type="checkbox" {id} />
    <label for={id}
        ><SignText
            ><img src={imgUrl} alt="" height="300px" width="300px" /></SignText
        ></label
    >
</div>

<style lang="scss">
    .checkbox {
        position: relative;
        display: flex;
        align-items: center;
        width: 300px;
        input {
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
        }
        label {
            overflow: hidden;
            cursor: pointer;
            user-select: none;
            img {
                object-fit: cover;
                border-radius: 8px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .checkbox {
            width: 200px;
        }
        img {
            width: 200px;
            height: 200px;
        }
    }
</style>
