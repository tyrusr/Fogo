import Layout from "../components/NavBar";
import AllListings from "../components/Listings";
import NewListing from "../components/NewListingLink";

export default function HomePage({ userName, isLoggedIn }) {
    return (
        <main>
            <Layout userName={userName} isLoggedIn={isLoggedIn} />
            <NewListing isLoggedIn={isLoggedIn} />
            <AllListings />
        </main>
    );
}