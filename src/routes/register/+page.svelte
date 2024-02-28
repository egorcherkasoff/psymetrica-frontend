<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Container from "$lib/components/Container.svelte";
    import Card from "$lib/components/cards/Card.svelte";
    import TextInput from "$lib/components/inputs/TextInput.svelte";
    import InputGroupVertical from "$lib/components/body/InputGroupVertical.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import DefaultBtn from "$lib/components/buttons/DefaultBtn.svelte";
    import OutlinedBtn from "$lib/components/buttons/OutlinedBtn.svelte";
</script>

<svelte:head>
    <title>Psymetrica | Регистрация</title>
</svelte:head>

<main class="main">
    <Container>
        <div class="auth">
            <Card>
                <form action="" class="auth__form">
                    <InputGroupVertical>
                        <HeadlineText>
                            <h1>Регистрация</h1>
                        </HeadlineText>
                        <TextInput
                            placeholder="Введите адрес вашей эл.почты"
                            fieldName="Эл. почта"
                        ></TextInput>
                        <TextInput
                            placeholder="Введите пароль"
                            fieldName="Пароль"
                        ></TextInput>
                        <TextInput
                            placeholder="Подтвердите пароль"
                            fieldName="Подтверждение пароля"
                        ></TextInput>
                    </InputGroupVertical>
                    <div class="auth__form-buttons">
                        <DefaultBtn text="Зарегистрироваться"></DefaultBtn>
                        <OutlinedBtn text="Уже есть аккаунт? Войдите"
                        ></OutlinedBtn>
                    </div>
                </form>
            </Card>
        </div>
    </Container>
</main>

<style lang="scss">
    @import "../../lib/styles/index.scss";
    .main {
        height: 100vh;
    }
    .auth {
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 600px;
        width: 100%;
        &__form {
            width: 100%;
            height: 100%;
            &-buttons {
                height: 90px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }

    @media screen and (max-width: 992px) {
        .auth {
            &__form {
                &-buttons {
                    height: 80px;
                }
            }
        }
    }

    @media screen and (max-width: 576px) {
        .auth {
            &__form {
                &-buttons {
                    height: 70px;
                }
            }
        }
    }
</style>
