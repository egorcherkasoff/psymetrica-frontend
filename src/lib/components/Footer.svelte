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
                        <SubHeadlineText>Навигация</SubHeadlineText>
                    </li>
                    <li class="footer__nav-item">
                        <a href="#" class="footer__nav-link">123</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="#" class="footer__nav-link">12233</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="#" class="footer__nav-link">3123</a>
                    </li>
                </ul>
            </nav>
            <div class="footer__vertical-box">
                <GoUpBtn></GoUpBtn>
                <div class="footer__social-links"></div>
            </div>
        </div>
    </Container>
</footer>

<style lang="scss">
    @import "../styles/index.scss";

    .footer {
        background-color: $primaryColor;
        padding: 10px 0 10px 0;
        &__box {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
