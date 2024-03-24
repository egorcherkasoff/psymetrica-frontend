<script lang="ts">
    import Container from "./Container.svelte";
    import Logo from "./Logo.svelte";
    import BurgerBtn from "./buttons/BurgerBtn.svelte";
    import AvatarSmall from "./avatars/AvatarSmall.svelte";
    import SearchInput from "./inputs/SearchInput.svelte";
    import Card from "./cards/Card.svelte";
    import BodyText from "./text/BodyText.svelte";
    import { slide } from "svelte/transition";

    let isBurgerActive: boolean;
    $: isBurgerActive = false;

    const toggleBurger = () => {
        console.log("isBurgerActive", isBurgerActive);

        isBurgerActive = !isBurgerActive;
    };
</script>

<header class="header">
    <Container>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <Logo />
                </li>
                <li class="header__nav-item">
                    <div class="header__nav-search">
                        <SearchInput></SearchInput>
                    </div>
                </li>
                <li class="">
                    <div class="header__nav-block">
                        <BurgerBtn on:click={toggleBurger} />
                        <AvatarSmall
                            src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg"
                            link="/login"
                        ></AvatarSmall>
                    </div>
                </li>
            </ul>
        </nav>
    </Container>
</header>

{#if isBurgerActive}
    <div class="menu">
        <Container>
            <ul class="menu__list">
                <li class="menu__list-item">Уведомления</li>
                <li class="menu__list-item">Че то еще</li>
                <li class="menu__list-item">Еще ссылочка</li>
                <li class="menu__list-item">тут поиск мб?</li>
            </ul>
        </Container>
    </div>
{/if}

<style lang="scss">
    @import "../styles/index.scss";

    .menu {
        background-color: $tableColor;
    }

    .header {
        z-index: 3;
        position: fixed;
        right: 0;
        left: 0;
        &__nav {
            height: 80px;
            // height: 100%;
            &-list {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            &-search {
                max-width: 300px;
                width: 100%;
            }
            &-block {
                max-width: 150px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            &-link {
                text-decoration: none;
            }
        }
        &__burger-nav {
            top: 0;
            display: none;
            &.active {
                display: block;
            }
        }
        &__burger-list {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        &__burger-item {
            & a {
                color: $textColor;
                font-weight: $h2FontWeight;
                font-size: $h2FontSize;
                text-decoration: none;
            }
        }
    }
    // медиа запросы
    @media screen and (max-width: 1200px) {
        .header {
            &__nav {
                &-list {
                }
                &-search {
                }
                &-block {
                }
            }
        }
    }
    @media screen and (max-width: 992px) {
        .header {
            height: 70px;
            &__nav {
                &-list {
                }
                &-search {
                }
                &-block {
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .header {
            height: 60px;
            &__nav {
                &-list {
                }
                &-search {
                    display: none;
                }
                &-block {
                }
            }
        }
    }

    @media screen and (max-width: 576px) {
        .header {
            margin-top: 5px;
            height: 50px;
            &__nav {
                &-list {
                }
                &-search {
                    display: none;
                }
                &-block {
                }
            }
        }
    }
</style>
