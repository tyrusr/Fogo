//imports
import { useState } from "react";
import { getUsersBids } from "../services/authServices";

export function useGetUserBids(params){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getBids(){
        setLoading(true)
        try{
            const response = await getUsersBids();

            setData(response);
            console.log(`response ${response}`)
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return {data, error, loading, getBids};
}