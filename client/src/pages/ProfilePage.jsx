import Layout from "../components/NavBar";
import UserBids from "../components/GetAllBids";
import UserListings from "../components/GetAllUserListings";

export default function ProfilePage({ userName, isLoggedIn }){
    return (
        <main>
            <Layout userName={userName} isLoggedIn={isLoggedIn} />
            <UserBids />
            <UserListings />
        </main>
    );
}