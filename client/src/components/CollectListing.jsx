import { useNavigate } from "react-router-dom";
import { useCollectListing } from "../hooks/useCollectListing";

export default function CollectListing({targetlisting}){
    const { error, loading, sendReq } = useCollectListing(targetlisting);


    const navigate = useNavigate();

    async function handleClick(e) {
        e.preventDefault();

        try{
            const response = await sendReq(targetlisting);
            if (response) {
                navigate("/");
            }
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div>
            {loading ? (
                <button disabled>Loading</button>
            ) : (
                <button onClick={handleClick}>Collect Listing</button>
            )}
        </div>
    )
}