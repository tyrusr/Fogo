import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { handleLogin, loading, error} = useLogin();

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await handleLogin(email, password);
        if (result) {
            navigate('/')
        }
    };
    
    return (
    <form onSubmit={onSubmit}>
        <input 
        type="email"
        id="email"
        required
        value={email}
        oncChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        />
        <input 
            type="password"
            required
            value={password}
            minLength={1}
            maxLength={100}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button type="submit" disabled={loding}>
            {loading ? "Logging in" : "Login"}
        </button>
        {error && <p style={{ color: "red"}}>{error}</p>}
    </form>
    );
}