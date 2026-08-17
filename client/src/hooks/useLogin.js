import { useState } from "react";
import { loginUser } from "../services/authServices";

export function useLogin() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleLogin(email, password){
        setLoading(true);
        setError(null);
        try {
            await loginUser(email, password);
            setLoading(false);
            return true;

        } catch(err) {
            setError(err.message);
            setLoading(false)
        }
    }

    return {handleLogin, error, loading};
}