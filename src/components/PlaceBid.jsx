//import dependancies
import { usePlaceBid } from "../hooks/usePlaceBid";

//add is logged in to the params
export default function PlaceBid({}) {
    const {data, error, loading, sendBid} = usePlaceBid();

    async function handleClick() {
        alert("wip");
        //sendBid(pass id from main functions prop);
    }

    return(
        <button className="bid-button" onClick={handleClick} disabled={loading}>
            {loading ? "Loading" : "Place Bid"}
        </button>
    )
}
