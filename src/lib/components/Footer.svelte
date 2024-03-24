<script lang="ts">
    import Logo from "./Logo.svelte";
    import Container from "./Container.svelte";
    import SubHeadlineText from "./text/SubHeadlineText.svelte";
    import GoUpBtn from "./buttons/GoUpBtn.svelte";
    import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<footer class="footer">
    <Container>
        <div class="footer__box">
            <div class="footer__logo">
                <Logo isInFooter={true}></Logo>
            </div>
            <nav class="footer__nav">
                <ul class="footer__nav-list">
                    <li class="footer__nav-item">
                        <SubHeadlineText isInFooter={true}
                            >Навигация</SubHeadlineText
                        >
                    </li>
                    <li class="footer__nav-item">
                        <a href="/" class="footer__nav-link">Главная</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="/tests" class="footer__nav-link">Тесты</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="/profile" class="footer__nav-link">Профиль</a>
                    </li>
                </ul>
            </nav>
            <GoUpBtn></GoUpBtn>
        </div>
    </Container>
</footer>

<style lang="scss">
    @import "../styles/index.scss";

    .footer {
        margin-top: 30px;
        background-color: $primaryColor;
        padding: 10px 0 10px 0;
        &__box {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__nav {
            &-list {
            }
            &-item {
                margin-bottom: 10px;
                &:last-child {
                    margin-bottom: 0px;
                }
            }
            &-link {
                text-decoration: none;
                font-family: $secondaryFontFamily;
                font-weight: $bodyFontWeight;
                font-size: $bodyFontSize;
                color: #fff;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .footer {
            position: relative;
            &__box {
                display: block;
            }
        }
    }
</style>
