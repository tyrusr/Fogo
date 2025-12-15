import Layout from "../components/NavBar";
import AllListings from "../components/Listings";
import NewListing from "../components/NewListingLink";
//create post link

//shows all listings from newest to oldest

//hook to grab all listings if displaying on hompepage

//implement toast for better ui messaging or keep using messages that are part of the dom?

export default function HomePage({ userName, isLoggedIn }) {
    return (
        <main>
            <Layout userName={userName} isLoggedIn={isLoggedIn} />
            <NewListing isLoggedIn={isLoggedIn} />
            <AllListings />
        </main>
    );
}