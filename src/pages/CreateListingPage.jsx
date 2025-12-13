//user can input their listing info here
import Layout from "../components/NavBar";
import CreateListing from "../components/CreateListing";

export default function CreateListingPage({userName, isLoggedIn}) {

    return (
        <main>
            <Layout  userName={userName} isLoggedIn={isLoggedIn}/>
            <CreateListing />
        </main>
    );

    //new listing component
        //set state stuff
        //on submit
        //form for new listing fields
}