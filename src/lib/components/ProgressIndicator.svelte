<script lang="ts">
    import SmallText from "./text/SmallText.svelte";
    export let progress: number = 0;
    export let max: number = 100;
</script>

<div class="progress-bar">
    <label for="progress">
        <SmallText><p>Ваш прогресс</p></SmallText>
    </label>
    <div class="progress-bar__wrapper">
        <progress id="progress" {max} value={progress}></progress>
    </div>
</div>

<style lang="scss">
    @import "../styles/index";
    // пофиксить
    .progress-bar {
        &__wrapper {
            overflow: hidden;
            progress {
                width: 100%;
                height: 30px;
                &[value]::-webkit-progress-bar {
                    background-color: red;
                }
                &[value]::-webkit-progress-value {
                    background-color: red;
                }
            }
        }
    }
</style>
