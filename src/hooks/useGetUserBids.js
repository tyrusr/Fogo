//imports
import { useState } from "react";
import { userBids } from "../services/authServices";


export function useGetUserBids(params){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    console.log("hook ran");

    async function getBids(){
        setLoading(true);
        console.log("function called");
        try{
            console.log("yes");
            const response = await userBids();

            console.log(`response ${response}`);
            setData(response);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return {data, error, loading, getBids};
}