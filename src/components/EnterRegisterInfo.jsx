import { useState } from "react"
import { useRegister } from "../hooks/useRegister";
import { useNavigate } from 'react-router-dom';

export default function RegisternForm({ setGlobalUsername, setIsLoggedIn}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { handleRegister, loading, error} = useRegister();

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await handleRegister(username, email, password, password2);
        if (result) {
            const storedUsername = localStorage.getItem("username");
            setGlobalUsername(storedUsername);
            const loggedIn = localStorage.getItem("isLoggedIn")
            setIsLoggedIn(loggedIn);
            navigate('/');
        }
    };
    
    return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        id="username"
        required
        value={username}
        minLength={1}
        maxLength={30}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        />
        <input 
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        />
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
        />
        <input 
            type="password"
            id="password2"
            name="password2"
            required
            value={password2}
            minLength={1}
            maxLength={100}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Password"
        />
        <button type="submit" disabled={loading}>
            {loading ? "Registering" : "Register"}
        </button>
        {error && <p style={{ color: "red"}}>{error}</p>}
    </form>
    );
}