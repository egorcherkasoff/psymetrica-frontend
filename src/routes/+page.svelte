<script>
    import HeaderNavBar from "$lib/components/HeaderNavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import check from "$lib/assets/check.svg";
    import test from "$lib/assets/test.svg";
    import H1Text from "$lib/components/text/H1Text.svelte";
    import H2Text from "$lib/components/text/H2Text.svelte";
    import SignText from "$lib/components/text/SignText.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import { Theme } from "$lib/types";
    import TestCard from "$lib/components/TestCard.svelte";
</script>

<header class="header">
    <HeaderNavBar></HeaderNavBar>
    <div class="banner container">
        <div class="banner__block">
            <p class="banner__block-title">
                <Logo text="Бесплатные онлайн тесты" theme={Theme.dark}></Logo>
            </p>
            <ul class="banner__list">
                <li class="banner__list-item">
                    <img
                        src={check}
                        alt="checkmark"
                        class="banner__item-icon"
                        width="50px"
                        height="66px"
                    />
                    <p class="banner__list-text">
                        <SignText text="Профориентация"></SignText>
                    </p>
                </li>
                <li class="banner__list-item">
                    <img
                        src={check}
                        alt="checkmark"
                        class="banner__item-icon"
                        width="50px"
                        height="66px"
                    />
                    <p class="banner__list-text">
                        <SignText text="Определение темперамента"></SignText>
                    </p>
                </li>
                <li class="banner__list-item">
                    <img
                        src={check}
                        alt="checkmark"
                        class="banner__item-icon"
                        width="50px"
                        height="66px"
                    />
                    <p class="banner__list-text">
                        <SignText text="Портрет личности"></SignText>
                    </p>
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
<main class="main">
    <div class="container">
        <H1Text text="Психологические тесты онлайн"></H1Text>
        <form class="filter-form">
            <ul class="filter-form__list">
                <li class="filter-form__item">
                    <label for="category" class="filter-form__label"
                        ><SignText text="Категория"></SignText></label
                    >
                    <select name="category" id="category" class="select">
                        <optgroup>
                            <option value="1">Профориентация</option>
                            <option value="2">Дисперсия</option>
                            <option value="3">Определение темперамента</option>
                        </optgroup>
                    </select>
                </li>
            </ul>
        </form>
        <H2Text text="Профориентация"></H2Text>
        <ul class="test__list">
            <li class="test__list-item"></li>
        </ul>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
    </div>
</main>
<Footer></Footer>

<style lang="scss">
    @import "../lib/styles/index.scss";
    /* header */
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
        }
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

    /* main */

    .main {
        background-color: $bodyColor;
        margin-top: 120px;
    }
    .filter-form {
        margin-top: 84px;
        margin-bottom: 120px;
        &__list {
            display: flex;
        }
        &__item {
            display: flex;
            flex-direction: column;
        }
        &__label {
            margin-bottom: 15px;
        }
    }
    .select {
        width: 540px;
        height: 86px;
        border-radius: 8px;
        border: 1px solid $formBorderColor;
        font-size: $subtitleFontSize;
        font-weight: $subtitleFontWeight;
        font-family: $secondaryFontFamily;
        color: $placeholderColor;
        padding: 15px 23px 15px 23px;
    }
</style>
