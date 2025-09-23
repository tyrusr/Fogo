import { useEffect, useState } from "react";
import { useGetListings } from "../hooks/useGetListings";

export default function AllListings({}){
    const [listings, setlistings] = useState([]);
    const { handleGetListings } = useGetListings();

    useEffect(() => {
        handleGetListings().then(data => { setlistings(data); console.log(listings); });
    }, []);
    

    return(
        listings.map(listing => (
            <h1 key={listing._id}>{listing.name}</h1>
            //put each individual thing for the listing in here such as
            //h1{listing.title}
        ))
    );
}