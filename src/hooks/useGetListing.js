// import from services
import { getListing } from "../services/authServices";


//hook to grab the listing when services responds

export function useGetListing(){
    console.log("usegetlisting");
    async function handleGetListing(id){
        console.log(`id ${id}`);
        try {
            const data = await getListing(id);
            console.log(`data${data}`);
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    return { handleGetListing }
}