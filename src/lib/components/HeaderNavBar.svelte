<script>
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import avatar from "$lib/assets/avatar.svg";
</script>

<nav class="header-nav container">
    <ul class="header-nav__list">
        <li class="header-nav__list-item">
            <a href="/" class="header-nav__logo">Psymetrica</a>
        </li>
        <li class="header-nav__list-item header-nav__list-item_grouped">
            <div class="header-nav__search">
                <i
                    class="fa-solid fa-magnifying-glass fa-2xl header-nav__search-icon"
                ></i>
                <input
                    class="header-nav__search-input"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Поиск..."
                />
            </div>
            <div class="header-nav__burger">
                <span class="header-nav__burger-line"></span>
                <span class="header-nav__burger-line"></span>
                <span class="header-nav__burger-line"></span>
            </div>
            <img
                src={avatar}
                alt="Фото профиля пользователя"
                width="74"
                height="74"
                class="header-nav__avatar"
            />
        </li>
    </ul>
</nav>

<style lang="scss">
    @import "../styles/index.scss";

    .header-nav {
        margin-top: 62px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    .header-nav__logo {
        @extend %logo;
    }

    .header-nav__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-nav__search {
        position: relative;
        &-icon {
            position: absolute;
            top: 35px;
            left: 33px;
            color: $iconColor;
        }
        &-input {
            @extend %input;
        }
    }

    .header-nav__burger {
        margin-left: 75px;
        cursor: pointer;
    }

    .header-nav__list-item {
        &_grouped {
            display: flex;
            align-items: center;
        }
    }

    .header-nav__burger-line {
        display: block;
        @extend %burger-line;
        &:first-child {
            margin-bottom: 8px;
        }
        &:last-child {
            margin-top: 8px;
        }
    }

    .header-nav__avatar {
        margin-left: 75px;
        object-fit: cover;
        width: 74px;
        height: 74px;
        border-radius: 50%;
        cursor: pointer;
    }

    @media (max-width: 576px) {
        .header-nav {
            margin-top: 15px;
        }
        .header-nav__logo {
            font-size: 28px;
        }
        .header-nav__avatar {
            margin-left: 15px;
            width: 50px;
            height: 50px;
        }
        .header-nav__burger {
            margin-left: 15px;
            &-line {
                width: 50px;
                height: 8px;
                &:first-child {
                    margin-bottom: 6px;
                }
                &:last-child {
                    margin-top: 6px;
                }
            }
        }
        .header-nav__search {
            display: none;
        }
    }
</style>
