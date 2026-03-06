import Layout from "../components/NavBar";
import UserBids from "../components/GetAllBids";

export default function ProfilePage({ userName, isLoggedIn }){
    return (
        <main>
            <Layout userName={userName} isLoggedIn={isLoggedIn} />
            <UserBids />
            <h1>wip</h1>
        </main>
    );
}


// shows all my listings

// shows all my bids

//delete option

//edit option

//show user profile details

//show all listings of the users if any

//show all bids of the users if anys