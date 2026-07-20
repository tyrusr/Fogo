import { useEffect } from "react";
import { useGetUserListingss } from "../hooks/useGetUserListings";
import { useNavigate } from "react-router-dom";
//call the hook for getting the listings the user posted

export default function UserListings() {
    const { data, error, loading, getUserListings } = useGetUserListings();

    useEffect(() => {
        getUserListings();
    }, [])

    const handleClick = (listing) => {
        navigate(`/listing/${listing._id}`);
    };

    return (
        <div>
            <div>wip</div>

            <main>
                {data && data.map(listing => (
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
        </div>
    
    );
}

//function

//use effect to call the hook

//return 