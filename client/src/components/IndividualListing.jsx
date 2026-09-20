import { useState, useEffect } from "react";
import { useGetListing } from "../hooks/useGetListing";
import { useGetMe } from "../hooks/useGetMe";
import PlaceBid from "../components/PlaceBid.jsx";
import EndListing from "../components/EndListing.jsx";
import CollectListing from "../components/CollectListing.jsx";

export default function Listing({id}){
    const [listing, setListing] = useState();
    const { handleGetListing } = useGetListing();
    const { data, getMe } = useGetMe();

    useEffect(() => {
        handleGetListing(id).then(data => { setListing(data); });
        getMe();
    }, [id])

    if (!listing) {
        return (<main className="listing container">loading</main>);
    }

    const isLister = data?.id === listing.listerRef;
    const isEnded = listing.status === "ended";
    const isHighBidder = data?.id === listing.highestBidder;

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
                    <h3 className="listing-price">
                        Current Price: ${listing.highestBid > 0 ? listing.highestBid : listing.price}
                    </h3>
                </div>
                <p className="listing-description">{listing.description}</p>
                
            </section>

            {isLister ? (
                <EndListing targetlisting={id}/>
            ) : isHighBidder && isEnded ? (
                <CollectListing targetlisting={id}/>
            ) : isHighBidder ? (
                <h1>You are the highest bidder</h1>
            ) : (
                <PlaceBid targetlisting={id}/>
            )}
        </main>
    );
}