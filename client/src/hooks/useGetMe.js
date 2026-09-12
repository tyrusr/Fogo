import { useState } from "react";
import { getLoggedInUser } from "../services/authServices";

export function useGetMe() {
    const [data, setData] = useState(null);

    async function getMe() {
        try {
            const response = await getLoggedInUser();
            setData(response);
        } catch (err) {
            //seterror
        }
    }

    return { data, getMe };
}
