import { Link } from "react-router-dom";
import LoginForm from "../components/EnterLoginInfo";
import Layout from "../components/NavBar";

export default function LoginPage({ setGlobalUsername, setIsLoggedIn }) {
    return (
        <div>
            <Layout />
            <h1>Login</h1>
            <LoginForm setGlobalUsername={setGlobalUsername} setIsLoggedIn={setIsLoggedIn} />
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}