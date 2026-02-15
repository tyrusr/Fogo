//import dependancies

//add is logged in to the params
export default function PlaceBid({}) {
    //deconstructor goes here

    async function handleClick() {
        alert("wip");
        //call function from hook and pass the listing id await
    }

    return(
        <button onClick={handleClick} disabled={loading}>
            {loading ? "Loading" : "Place Bid"}
        </button>
    )
}
