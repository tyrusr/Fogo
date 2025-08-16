import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useNavigate } from 'react-router-dom';

//import setusername and set is regerster as arguments
export default function LoginForm({ setGlobalUsername, setIsLoggedIn }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { handleLogin, loading, error } = useLogin();

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await handleLogin(email, password);
        if (result) {
            const storedUsername = localStorage.getItem("username");
            setGlobalUsername(storedUsername);
            const loggedIn = localStorage.getItem("isLoggedIn")
            setIsLoggedIn(loggedIn);
            navigate('/')
        }
    };
    
    return (
    <form className="login-form" onSubmit={onSubmit}>
        <input 
        type="email"
        id="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        /> <br />
        <input 
            type="password"
            id="password"
            name="password"
            required
            value={password}
            minLength={1}
            maxLength={100}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        /> <br />
        <button type="submit" disabled={loading}>
            {loading ? "Logging in" : "Login"}
        </button>
        {error && <p style={{ color: "red"}}>{error}</p>} <br />
    </form> 
    );
}