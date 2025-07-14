import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token && token.split('.').length === 3) {
            try {
                const decode = jwtDecode(token);
                setUser(decode);
            } catch (err) {
                console.error("Invalid token", err);
                setUser(null);
            }
        }
    }, []);

    return { user, isLoggedIn: !!user };
}