import { useState } from "react";
import { getAllUserListings } from "../services/authServices";
export function useGetUserListings() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getUserListings() {
        setLoading(true);
        try {
            const response = await getAllUserListings();
            setData(response.listings || []);
        } catch(err) {
            //seterror
        } finally {
            setLoading(false);
        }
    }

    return {data, error, loading, getUserListings};
}