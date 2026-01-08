import Layout from "../components/NavBar";
import { useParams } from "react-router-dom";
//get components from listings hook


export default function ListingPage ({userName, isLoggedIn}) {
    const { id } = useParams();
    
    return (
        <main>
            <Layout userName={userName} isLoggedIn={isLoggedIn} />
            <h1>listing goes here</h1>
            {/* listing hook goes here */}
        </main>
    );
}

//shows listing info such as name bid pic etc

//note need to make the listings in home page link to this using the corresponding listing using the _id.

