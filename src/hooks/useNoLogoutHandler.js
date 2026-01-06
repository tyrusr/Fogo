import { useState, useEffect } from "react";
import { nologout } from "../services/authServices";

export default function useNoLogoutHandler() {

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