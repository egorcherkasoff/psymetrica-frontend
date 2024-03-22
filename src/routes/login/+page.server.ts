import type { Actions } from "@sveltejs/kit";
import axios from "axios";

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get("email");
        const password = data.get("password");
        try {
            const { data } = await axios.post("http://localhost:8080/api/auth/jwt/create/",
                {
                    email,
                    password
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                },
            );
            localStorage.setItem("refresh_token", data.refresh);
            localStorage.setItem("access_token", data.access);
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