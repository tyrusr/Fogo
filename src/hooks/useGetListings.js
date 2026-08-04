import { useState } from "react";
import { getListings } from "../services/authServices";

//export function
export function useGetListings(){
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setloading] = useState(false);
    async function handleGetListings(){
        setloading(true);
        try {
            const data = await getListings();
            setListings(data.listings);
        } catch(err) {
            console.log(err);
        } finally {
            setloading(false);
        }
    }

    return { listings, error, loading, handleGetListings }
}