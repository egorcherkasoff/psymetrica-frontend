<script lang="ts">
    export let user: string = "Неизвестно";
    export let src: string;
    export let link: string = "/";
</script>

<div class="avatar">
    <a href={link}>
        <img {src} alt="Аватар пользователя {user}" />
    </a>
</div>

<style lang="scss">
    .avatar {
        cursor: pointer;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
</style>
