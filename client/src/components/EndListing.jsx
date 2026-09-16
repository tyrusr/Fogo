import { useNavigate } from "react-router-dom";
//import use end listing hook

export default function EndListing({targetlisting}){
    const {data, error, loading, sendReq} = useEndListing();

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
                <button onClick={handleClick}>End Listing</button>
            )}
        </div>
    )
}