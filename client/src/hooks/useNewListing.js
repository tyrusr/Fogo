import { useState } from "react";
import { createListing } from "../services/authServices";

export function newListing() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleNewListing(name, price, description, image) {
        setLoading(true);
        setError(null);
        try {
            const data = await createListing(name, price, description, image);
            setLoading(false);
            return data;
        } catch(err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return { handleNewListing, error, loading };
}