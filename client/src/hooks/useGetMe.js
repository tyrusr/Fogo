import { useState } from "react";

export default function useGetMe() {
    const [data, setData] = useState(null);

    async function getMe() {
        try {
            const response = await sampleServicesCall();
            setData(response);
        } catch (err) {
            //seterror
        }
    }

    return { data, getMe };
}
