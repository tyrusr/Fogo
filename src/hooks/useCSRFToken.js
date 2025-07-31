// bad no local storage cookie only
import { useEffect, useState } from "react";
import { getCSRFToken } from "../services/authServices";

export default function useCSRFToken() {

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const data = await getCSRFToken();
                if (data?.message) {
                    console.log(data.message);
                }
            } catch (err) {
                console.error("Error fetching CSRF token:", err);
            }
            
        };

        fetchToken();
    }, []);
}