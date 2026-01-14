// import from services
import { getListing } from "../services/authServices";


//hook to grab the listing when services responds

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