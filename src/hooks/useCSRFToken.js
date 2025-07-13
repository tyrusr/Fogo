import { useEffect, useState } from "react";
import { getCSRFToken } from "../services/authServices";

export default function useCSRFToken() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const data = await getCSRFToken();
                setToken(data.csrfToken);
                localStorage.setItem('csrfToken', data.csrfToken);
            } catch (err) {
                console.error("Error fetching CSRF token:", err);
            }
        };

        fetchToken();
    }, []);

    return token;
}