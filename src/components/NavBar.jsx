import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Layout(){
    const { user, isLoggedIn} = useAuth();

    return (
        <div class="nav-bar">
            <Link to='/' className="nav-link" id="logo">Fogo</Link>
            <div className="nav-link">
                {user ? (
                    <p>Hello { user.username }</p>
                ) : (
                    <p>Please Login!</p>
                )}
            </div> 
            
            {isLoggedIn && (
            <Link to='#' className="nav-link" id="login-reg">My profile</Link>
            )}
            <Link to='/login' className="nav-link" id="login-reg">Login</Link>
        </div>
    );
}