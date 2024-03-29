import type { PageServerLoad } from "./$types";
import axios from "axios";

export const load: PageServerLoad = async () => {
    try {
        const { data } = await axios.get("http://localhost:8080/api/tests");
        return data;
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
};