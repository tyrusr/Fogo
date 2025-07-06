import { useState } from "react";
import { registerUser } from "../services/authServices";


export function useRegister() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleRegister(username, email, password, password2){
        setLoading(true);
        setError(null);
        if (password != password2) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try{
            const data = await registerUser(username, email, password, password2);
            localStorage.setItem('jwt', data.jwt);
            localStorage.setItem('csrfToken', data.csrfToken);
            setLoading(false);
            return data;
        } catch(err) {
            if (err.message.includes("username")) {
                setError("Username already taken");
            } else if (err.message.includes("email")) {
                setError("Email is already taken");
            } else {
                setError(err.message);
            }
            setLoading(false);
        }

    }
    return {handleRegister, loading, error}
}