import type { UserProfile } from "$lib/types";
import type { PageServerLoad } from "./$types";
import axios from "axios";

export const load: PageServerLoad = async ({ params }) => {
    try {
        const { data: user } = await axios.get(`http://localhost:8080/api/auth/users/${params.id}`);
        const { data: tests } = await axios.get(`http://localhost:8080/api/users/${params.id}/tests`);
        console.log(tests);

        const userProfile: UserProfile = {
            ...user,
            ...tests,
        }
        console.log(userProfile);

        return userProfile;
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