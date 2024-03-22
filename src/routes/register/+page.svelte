<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Container from "$lib/components/Container.svelte";
    import Card from "$lib/components/cards/Card.svelte";
    import TextInput from "$lib/components/inputs/TextInput.svelte";
    import InputGroupVertical from "$lib/components/body/InputGroupVertical.svelte";
    import HeadlineText from "$lib/components/text/HeadlineText.svelte";
    import DefaultBtn from "$lib/components/buttons/DefaultBtn.svelte";
    import OutlinedBtn from "$lib/components/buttons/OutlinedBtn.svelte";
    import SignText from "$lib/components/text/SignText.svelte";
    export let form;
</script>

<svelte:head>
    <title>Psymetrica | Регистрация</title>
</svelte:head>

<main class="main">
    <Container>
        <div class="auth">
            <Card isFullWidth={true}>
                <form method="POST" class="auth__form">
                    <InputGroupVertical>
                        <HeadlineText>
                            <h1>Регистрация</h1>
                        </HeadlineText>
                        <TextInput
                            type="email"
                            name="email"
                            placeholder="Введите адрес вашей эл.почты"
                            fieldName="Эл. почта"
                            isRequired={true}
                        ></TextInput>
                        <TextInput
                            type="password"
                            name="password1"
                            placeholder="Введите пароль"
                            fieldName="Пароль"
                            isRequired={true}
                        ></TextInput>
                        <TextInput
                            type="password"
                            name="password2"
                            placeholder="Подтвердите пароль"
                            fieldName="Подтверждение пароля"
                            isRequired={true}
                        ></TextInput>
                    </InputGroupVertical>
                    {#if form?.error}
                        <div class="auth__form-error">
                            <SignText isError={true}
                                ><p>{form?.error}</p></SignText
                            >
                        </div>
                    {/if}
                    <div class="auth__form-buttons">
                        <DefaultBtn type="submit" text="Зарегистрироваться"
                        ></DefaultBtn>
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
            &-error {
                margin-bottom: 10px;
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
