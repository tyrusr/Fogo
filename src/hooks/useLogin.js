import { useState } from "react";
import { loginUser } from "../services/authServices";

export function useLogin() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleLogin(email, password){
        setLoading(true);
        setError(null);
        try {
            const data = await loginUser(email, password);
            localStorage.setItem('jwt', data.jwt);
            setLoading(false);
            return data;

        } catch(err) {
            setError(err.message);
            setLoading(false)
        }
    }

    return {handleLogin, error, loading};
}