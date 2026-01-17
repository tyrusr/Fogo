import { useState, useEffect } from "react";
import { useGetListing } from "../hooks/useGetListing";

export default function Listing({id}){
    const [listing, setListing] = useState();
    const { handleGetListing } = useGetListing();

    //make hook to grab the listing by the id here
    useEffect(() => {
        handleGetListing(id).then(data => { setListing(data); });
    }, [id])

    if (!listing) {
        return (<main className="listing container">loading</main>);
    }
    return(
        <main className="listing-container">
            <section className="image-section">
                <img 
                    className="listing-image"
                    src={listing.image}
                    onError={(e) => { e.target.src = "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"; }}
                />
            </section>
            <section className="details-section">
                <div className="listing-np-container">
                    <h1 className="listing-name">{listing.name}</h1>
                    <h3 className="listing-price">Current Price: {listing.price}</h3>
                </div>
                <p className="listing-description">{listing.description}</p>
            </section>
        </main>
    );
}