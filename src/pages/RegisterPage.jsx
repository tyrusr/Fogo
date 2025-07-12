import RegisternForm from "../components/EnterRegisterInfo"
import Layout from "../components/NavBar"

export default function RegisterPage() {
    return (
    <div>
        <Layout />
        <h1>Register</h1>
        <RegisternForm />
    </div>
    );
}