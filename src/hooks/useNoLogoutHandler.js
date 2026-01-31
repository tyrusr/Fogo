import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { nologout } from "../services/authServices";

export default function useNoLogoutHandler() {
    const location = useLocation();

    useEffect(() => {
        async function handleNoLogout() {
            try {
                const res = await nologout();
                if(res.status === 401) {
                    localStorage.removeItem("username");
                    localStorage.removeItem("isLoggedIn");
                }
            } catch (err) {
                localStorage.removeItem("username");
                localStorage.removeItem("isLoggedIn");
            }
        }
        handleNoLogout();
    }, [location]);
}