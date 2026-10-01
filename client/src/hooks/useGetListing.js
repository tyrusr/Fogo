import { useState } from "react";
import { getListing } from "../services/authServices";

export function useGetListing(){
    const [ listing, setListing ] = useState([]);
    async function handleGetListing(id){
        try {
            const data = await getListing(id);
            setListing(data);
        } catch (err) {
            console.log(err);
        }
    }
    

    return { listing, handleGetListing }
}