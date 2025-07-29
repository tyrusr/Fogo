import { Link } from 'react-router-dom';

export default function Layout({ userName, isLoggedIn }){

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
                <Link to='#' className="nav-link" id="login-reg">Logout</Link>
            ) : (
                <Link to='/login' className="nav-link" id="login-reg">Login</Link>
            )}
        </div>
    );
}