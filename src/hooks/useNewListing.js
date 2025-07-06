import { useState } from "react";
import { createListing } from "../services/authServices";

export function useNewListing() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function newListing(/* parameters for listing */) {
        setLoading(true);
        setError(null);
        try {
            const data = await createListing(/* parameters for listing */);
            setLoading(false);
            return data;
        } catch(err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return { newListing, error, loading};
}