import { useState } from "react";
import { userBids } from "../services/authServices";


export function useGetUserBids(params){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getBids(){
        setLoading(true);
        try{
            const response = await userBids();
            setData(response.listings || []);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return { data, error, loading, getBids };
}