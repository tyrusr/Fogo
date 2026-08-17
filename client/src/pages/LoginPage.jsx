import { Link } from "react-router-dom";
import LoginForm from "../components/EnterLoginInfo";
import Layout from "../components/NavBar";

export default function LoginPage({ setGlobalUsername, setIsLoggedIn }) {
    return (
        <main>
            <Layout />
            <section className="login-container">
                <h1 className="login-header">Login</h1> <br />
                <LoginForm setGlobalUsername={setGlobalUsername} setIsLoggedIn={setIsLoggedIn} />
                <p className="login-footer">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </section>
        </main>
    );
}