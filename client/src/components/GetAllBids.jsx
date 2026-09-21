import { useEffect } from "react";
import { useGetUserBids } from "../hooks/useGetUserBids";
import { useNavigate } from "react-router-dom";
import { useGetMe } from "../hooks/useGetMe";

export default function UserBids() {
    const { data, error, loading, getBids } = useGetUserBids();
    const { data: user, getMe } = useGetMe();

    const navigate = useNavigate();

    useEffect(() => {
        getBids();
        getMe();
    }, [])

    const handleClick = (listing) => {
        navigate(`/listing/${listing._id}`);
    };

    console.log(data);

    if (loading || !data) {
        return (<main className="listing container">loading</main>);
    }


    
    {data && data.map(listing => {
        const isEnded = data?.status === "ended";
        const isHighBidder = user?.id === data?.highestBidder;
        const hasWon = isEnded && isHighBidder;

        return (
            <div>
                <main>
                    
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
                            {hasWon && <h2>You Won!</h2>}
                        </section>
                    
                </main>
            </div>
        
        );
    })}
}