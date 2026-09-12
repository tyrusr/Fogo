import { useState } from "react";

export default function useGetMe() {
    [data, setData] = useState(null);

    async function getMe() {
        try {
            const response = await getMe();
            setData(response);
        } catch (err) {
            //seterror
        }
    }

    return { data, getMe };
}
