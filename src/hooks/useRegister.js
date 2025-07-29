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
            await registerUser(username, email, password, password2);
            setLoading(false);
            return true;
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