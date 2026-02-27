//import dependancies
import { useState } from "react";
import { usePlaceBid } from "../hooks/usePlaceBid";

//add is logged in to the params
export default function PlaceBid({targetlisting}) {
    const [bidAmount, setBidAmount] = useState("");
    const {data, error, loading, sendBid} = usePlaceBid();

    async function handleClick() {
        try{
            const response = await sendBid(targetlisting, bidAmount);
            if (response) {
                window.location.reload();
            } 
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <form className="bid-button" onSubmit={handleClick}>
            <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                required
            />
            <button  disabled={loading}>
                {loading ? "Loading" : "Place Bid"}
            </button>
        </form>
    )
}
