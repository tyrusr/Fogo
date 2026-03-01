//imports
import { useState } from "react";

export function useGetUserBids(params){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getBids(){
        setLoading(true)
        try{
            //services call
            //set data
        } catch(err) {
            //set error
        } finally {
            setLoading(false);
        }
    }

    return {data, error, loading, getBids};
}