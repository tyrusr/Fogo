import { useState } from "react";
import { logoutUser } from "../services/authServices";

export function useLogout() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleLogout() {
        setLoading(true);
        setError(null);
        try {
            const data = await logoutUser();
            setLoading(false);
            return data;
        } catch(err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return { handleLogout, error, loading };
}