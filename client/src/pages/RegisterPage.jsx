import RegisternForm from "../components/EnterRegisterInfo"
import Layout from "../components/NavBar"

export default function RegisterPage({ setGlobalUsername, setIsLoggedIn }) {
    return (
    <main>
        <Layout />
        <section className="register-container">
            <h1 className="register-header">Register</h1>
            <RegisternForm setGlobalUsername={setGlobalUsername} setIsLoggedIn={setIsLoggedIn} />
        </section>
    </main>
    );
}