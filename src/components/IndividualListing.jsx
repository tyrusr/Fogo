import { useState, useEffect } from "react";
import { useGetListing } from "../hooks/useGetListing";

export default function Listing({id}){
    const [listing, setListing] = useState();
    const { handleGetListing } = useGetListing();

    //make hook to grab the listing by the id here
    useEffect(() => {
        handleGetListing(id).then(data => { setListing(data); console.log(listing); });
    }, [])


    return(
        <main>
            <h1>wip</h1>
        </main>
    );
}