import Layout from "../components/NavBar";
//get components from listings hook


export default function ListingPage ({userName, isLoggedIn}) {
    return (
        <main>
            <Layout />
            {/* listing hook goes here */}
        </main>
    )
}

//shows listing info such as name bid pic etc

//note need to make the listings in home page link to this using the corresponding listing using the _id.

