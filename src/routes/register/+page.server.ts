import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import axios from "axios";

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get("email");
        const password = data.get("password1");
        const passwordRepeat = data.get("password2");

        if (password !== passwordRepeat) {
            return fail(400, { error: "Пароли не совпадают" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email.toString())) {
            return fail(400, { error: "Неверный формат эл. почты" });
        }

        if (typeof password !== "string" || password.length < 8) {
            return fail(400, { error: "Пароль должен быть длинее 8 символов" });
        }

        try {
            await axios.post("http://localhost:8080/api/auth/users/",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                },
            );
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Текст ошибки: ', error.response?.data);

            } else {
                console.log(
                    `Неожиданная ошибка: ${error}`,
                );
            }
            return { success: false };
        }
        return { success: true };
    }
};