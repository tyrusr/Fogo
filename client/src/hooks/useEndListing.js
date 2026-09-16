import { useState } from "react";
import { endListing } from "../services/authServices";

export function useEndListing() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function sendReq(targetlisting) {
        setLoading(true);
        try {
            const response = await endListing(targetlisting);
            setData(response);
            return response;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return { data, error, loading, sendReq };
}