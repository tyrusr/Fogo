import RegisternForm from "../components/EnterRegisterInfo"
import Layout from "../components/NavBar"

export default function RegisterPage({ setGlobalUsername, setIsLoggedIn }) {
    return (
    <div>
        <Layout />
        <h1>Register</h1>
        <RegisternForm setGlobalUsername={setGlobalUsername} setIsLoggedIn={setIsLoggedIn} />
    </div>
    );
}