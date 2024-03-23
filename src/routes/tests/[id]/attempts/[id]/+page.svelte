<script lang="ts">
    import Container from "$lib/components/Container.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import PaginationGroup from "$lib/components/navigation/PaginationGroup.svelte";
    import PageBtn from "$lib/components/buttons/PageBtn.svelte";
    import HorizontalDivider from "$lib/components/body/HorizontalDivider.svelte";
    import SubHeadlineText from "$lib/components/text/SubHeadlineText.svelte";
    import SingleOption from "$lib/components/cards/questions/SingleOption.svelte";
    import MultiOption from "$lib/components/cards/questions/MultiOption.svelte";
    import ScaleOption from "$lib/components/cards/questions/ScaleOption.svelte";
    import ImageOption from "$lib/components/cards/questions/ImageOption.svelte";
    import IntroOption from "$lib/components/cards/questions/IntroOption.svelte";
    import OpenOption from "$lib/components/cards/questions/OpenOption.svelte";
    import SingleMatrixOption from "$lib/components/cards/questions/SingleMatrixOption.svelte";
    import MultiMatrixOption from "$lib/components/cards/questions/MultiMatrixOption.svelte";
    import BodyText from "$lib/components/text/BodyText.svelte";
    import ChartBar from "$lib/components/cards/ChartBar.svelte";
    import ChartPie from "$lib/components/cards/ChartPie.svelte";
    import Checkbox from "$lib/components/inputs/Checkbox.svelte";

    let chartIsBar: boolean = true;
</script>

<svelte:head>
    <title>
        Прохождение теста Кто ты из слова пацана? пользователем Иван иванов</title
    >
</svelte:head>

<main class="main">
    <Container>
        <div class="attempt">
            <div class="attempt__info">
                <div class="attempt__info-title">
                    <HeadlineText
                        >Прохождение теста "Кто ты из слова пацана?"
                        пользователем <a
                            href="/profile/id"
                            class="attempt__info-link">Иван Иванов</a
                        > от 12.03.2024</HeadlineText
                    >
                </div>
                <HorizontalDivider></HorizontalDivider>
            </div>
            <div class="attempt__overview">
                <SubHeadlineText>Статистика прохождения</SubHeadlineText>
                <!-- время начала/завершения прохождения, кол-во ответов / всего вопросов ,шкалы, проверены ли ответы? -->
                <div class="attempt__overview-timestamps">
                    <BodyText
                        >Начало прохождения: 12.03.2024 в 10:00 <span>/</span> Окончание:
                        12.03.2024 в 10:25</BodyText
                    >
                </div>
                <div class="attempt__overview-qacount">
                    <BodyText><p>Всего вопросов: 5</p></BodyText>
                    <BodyText><p>Ответ дан на: 4 вопроса(ов)</p></BodyText>
                </div>
                <HorizontalDivider></HorizontalDivider>
                <div class="attempt__overview-scales">
                    <BodyText><p>Баллы по шкалам теста</p></BodyText>
                    <Checkbox id="123123">Изменить тип диаграмы</Checkbox>
                    {#if chartIsBar}
                        <ChartBar></ChartBar>
                    {:else}
                        <ChartPie></ChartPie>
                    {/if}
                </div>
            </div>
            <div class="attempt__answers">
                <SubHeadlineText>Ответы пользователя</SubHeadlineText>
                <div class="attempt__answers-list">
                    <SingleOption></SingleOption>
                    <MultiOption></MultiOption>
                    <ScaleOption></ScaleOption>
                    <ImageOption></ImageOption>
                    <OpenOption></OpenOption>
                    <SingleMatrixOption></SingleMatrixOption>
                    <MultiMatrixOption></MultiMatrixOption>
                </div>
                <div class="attempt__answers-pagination">
                    <PaginationGroup>
                        <PageBtn>&lsaquo;</PageBtn>
                        <PageBtn>1</PageBtn>
                        <PageBtn isActive={true}>2</PageBtn>
                    </PaginationGroup>
                </div>
            </div>
        </div>
    </Container>
</main>

<style lang="scss">
    @import "../../../../../lib/styles/index.scss";

    .main {
        padding-top: 160px;
    }

    .attempt {
        &__info {
            max-width: 600px;
            &-title {
                margin-bottom: 15px;
            }
            &-link {
                text-decoration: none;
                color: $primaryColor;
            }
        }
        &__overview {
            margin-top: 30px;
            &-timestamps {
                margin-top: 15px;
                & span {
                    font-weight: bold;
                }
            }
            &-qacount {
                margin-top: 15px;
                & p:last-child {
                    margin-top: 5px;
                }
                margin-bottom: 15px;
            }
            &-scales {
                margin-top: 15px;
            }
        }
        &__answers {
            margin-top: 30px;
            &-list {
                margin-top: 15px;
                display: grid;
                grid-template-columns: 1fr;
                row-gap: 15px;
                margin-top: 15px;
            }
            &-pagination {
                margin-top: 30px;
            }
        }
    }
</style>
