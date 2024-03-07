<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Card from "./Card.svelte";
    import BodyText from "../text/BodyText.svelte";
    import SubHeadlineText from "../text/SubHeadlineText.svelte";
    export let title: string;
    export let author: string;
    export let id: string = "/";
    export let timesPassed: number;
    export let createdAt: string;
</script>

<Card>
    <div class="card__box">
        <div class="card__box-info">
            <SubHeadlineText link="tests/{id}/start">
                {title}</SubHeadlineText
            >
            <BodyText>{author}</BodyText>
            <BodyText>Пройдено: {timesPassed} раз(а)</BodyText>
            <BodyText>Добавлен {createdAt}</BodyText>
        </div>
        <div class="card__goto">
            <span class="card__goto-divider"></span>
            <a href="tests/{id}/start" class="card__goto-link">
                <i class="fa-solid fa-chevron-right"></i>
            </a>
        </div>
    </div>
</Card>

<style lang="scss">
    @import "../../styles/index";

    .card {
        &__box {
            min-height: 110px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-info {
                display: flex;
                flex-direction: column;
                line-height: 28px;
            }
        }
        &__goto {
            display: flex;
            align-items: center;
            justify-content: center;
            &-divider {
                display: block;
                border-radius: 50%;
                width: 1px;
                height: 100px;
                background-color: $formBorderColor;
                margin-right: 30px;
            }
            a {
                color: $iconColor;
                font-size: 32px;
                margin-right: 15px;
            }
        }
    }
</style>
