import Layout from "../components/NavBar";

//create post link

//shows all listings from newest to oldest

//hook to grab all listings if displaying on hompepage

export default function HomePage({ userName, isLoggedIn }) {
    return (
        <div>
            <Layout userName={userName} isLoggedIn={isLoggedIn} />
        </div>
    );
}