<script></script>

<footer class="footer">
    <ul class="footer__list container">
        <li class="footer__list-item">
            <a href="/" class="footer__logo">Psymetrica</a>
        </li>
        <li class="footer__list-item">
            <p class="footer__list-title">Меню</p>
            <ul class="footer__grid">
                <li class="footer__grid-item">Главная</li>
                <li class="footer__grid-item">О проекте</li>
                <li class="footer__grid-item">Психологи</li>
                <li class="footer__grid-item">Статьи</li>
                <li class="footer__grid-item">Отзывы</li>
                <li class="footer__grid-item">Контакты</li>
            </ul>
        </li>
        <li class="footer__list-item">
            <button class="footer__button">^</button>
            <ul class="footer__social">
                <li class="footer__social-link"><a href="/">vk</a></li>
                <li class="footer__social-link"><a href="/">tg</a></li>
                <li class="footer__social-link"><a href="/">inst</a></li>
            </ul>
        </li>
    </ul>
</footer>

<style lang="scss">
    @import "../styles/index.scss";

    .footer {
        height: 426px;
        width: 100%;
        background-color: $primaryColor;
        padding-top: 67px;
    }
    .footer__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer__logo {
        color: #ffffff;
    }
    .footer__list-title {
        font-weight: $h2FontWeight;
        font-size: $h2FontSize;
    }
</style>
