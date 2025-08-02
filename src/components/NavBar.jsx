import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export default function Layout({ userName, isLoggedIn }){
    const { handleLogout } = useLogout();
    const navigate = useNavigate();

    const onLogoutClick = async () => {
        await handleLogout();
        navigate('/');
        window.location.reload();
    }

    return (
        <div className="nav-bar">
            <Link to='/' className="nav-link" id="logo">Fogo</Link>
            <div className="nav-link">
                {userName ? (
                    <p>Hello { userName }</p>
                ) : (
                    <p>Please Login!</p>
                )}
            </div> 
            
            {isLoggedIn && (
            <Link to='#' className="nav-link" id="login-reg">My profile</Link>
            )}
            {isLoggedIn ? (
                <button onClick={onLogoutClick} className="nav-link logout-link" id="login-reg">
                    Logout
                </button>
            ) : (
                <Link to='/login' className="nav-link" id="login-reg">Login</Link>
            )}
        </div>
    );
}