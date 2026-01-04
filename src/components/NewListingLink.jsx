import { useNavigate } from "react-router-dom";

export default function NewListing({ isLoggedIn }){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/createlisting')
    }


    return(
        <nav>
            {isLoggedIn &&
                <button onClick={handleClick} id="new-listing-link">
                    Create Listing
                </button>
            }
        </nav>
    );
}