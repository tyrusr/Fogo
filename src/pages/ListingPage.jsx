import Layout from "../components/NavBar";
import { useParams } from "react-router-dom";
import Listing from "../components/IndividualListing.jsx";


//get components from listings hook


export default function ListingPage ({userName, isLoggedIn}) {
    const { id } = useParams();
    
    return (
        <main>
            <Layout userName={userName} isLoggedIn={isLoggedIn} />
            <Listing id={id} />
        </main>
    );
}
