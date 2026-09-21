import { getListing } from "../services/authServices";

export function useGetListing(){

    async function handleGetListing(id){
        try {
            const data = await getListing(id);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
    

    return { handleGetListing }
}