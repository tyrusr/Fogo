import { useEffect, useState } from "react";
import { useGetListings } from "../hooks/useGetListings";
import { createStaticHandler } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AllListings(){
    const [listings, setlistings] = useState([]);
    const { handleGetListings } = useGetListings();
    const navigate = useNavigate();

    useEffect(() => {
        handleGetListings().then(data => { setlistings(data); });
    }, []);
    
    const handleClick = (listing) => {
        navigate(`/listing/${listing._id}`);
    };
    if (!listings) {
        return (<main className="listing container">loading</main>);
    }
    return(
        <main className="listings-container">
            {listings.map(listing => (
                    <section key={listing._id} className="listings-main" onClick={() => handleClick(listing)}>
                        <div className="listings-np-container">
                            <h1 className="listings-name">{listing.name}</h1>
                            <h3 className="listings-price">
                                Current Price: ${listing.highestBid > 0 ? listing.highestBid : listing.price}
                            </h3>
                        </div>
                        <img 
                            className="listings-image"
                            src={listing.image}
                            onError={(e) => { e.target.src = "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"; }}
                        />
                        <p className="listings-description">{listing.description}</p>
                    </section>
            ))}
        </main>
    );
}