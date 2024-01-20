<script>
    import HeaderNavBar from "$lib/components/HeaderNavBar.svelte";
    import check from "$lib/assets/check.svg";
    import test from "$lib/assets/test.svg";
</script>

<header class="header">
    <HeaderNavBar></HeaderNavBar>
    <div class="banner container">
        <div class="banner__block">
            <h1 class="title">Бесплатные онлайн-тесты</h1>
            <ul class="banner__list">
                <li class="banner__list-item">
                    <img
                        src={check}
                        alt="checkmark"
                        class="banner__item-icon"
                        width="50px"
                        height="66px"
                    />
                    <p class="banner__list-text">Профориентация</p>
                </li>
                <li class="banner__list-item">
                    <img
                        src={check}
                        alt="checkmark"
                        class="banner__item-icon"
                        width="50px"
                        height="66px"
                    />
                    <p class="banner__list-text">Определение темперамента</p>
                </li>
                <li class="banner__list-item">
                    <img
                        src={check}
                        alt="checkmark"
                        class="banner__item-icon"
                        width="50px"
                        height="66px"
                    />
                    <p class="banner__list-text">Портрет личности</p>
                </li>
            </ul>
        </div>
        <div class="banner__block">
            <img
                src={test}
                alt="sdad"
                class="banner__image"
                height="660px"
                width="697px"
            />
        </div>
    </div>
</header>
<main>main block</main>
<footer>footer block</footer>

<style lang="scss">
    @import "../lib/styles/index.scss";

    .header {
        position: relative;
        height: 1032px;
        background-color: $tableColor;
    }
    .banner {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__image {
            object-fit: cover;
            max-width: 697px;
            max-height: 660px;
            width: 100%;
            height: 100%;
        }
        &__list-item {
            display: flex;
            align-items: end;
            height: 66px;
            margin-bottom: 45px;
            &:first-child {
                margin-top: 15px;
            }
            &:last-child {
                margin-bottom: 0px;
            }
        }
        &__item-icon {
            object-fit: contain;
            width: 50px;
            height: 66px;
        }
        &__list-text {
            margin-left: 23px;
            font-family: $secondaryFontFamily;
            color: $textColor;
            font-weight: $bodyFontWeight;
            font-size: $bodyFontSize;
        }
    }
    .title {
        font-family: $primaryFontFamily;
        font-weight: $logoFontWeight;
        font-size: $logoFontSize;
        color: $textColor;
    }
    .banner__block {
        :first-child {
            max-width: 530px;
        }
        :last-child {
            max-width: 697px;
            max-height: 660px;
        }
    }
</style>
