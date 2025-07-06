import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Layout(){
    const { user, isLoggedIn} = useAuth();

    return (
        <div>
            <div>
                {user ? (
                    <p>Hello { user.username }</p>
                ) : (
                    <p>Please Login!</p>
                )}
            </div>
            <Link to='/'>Fogo</Link>
            {isLoggedIn && (
            <Link to='#'>My profile</Link>
            )}
            <Link to='#'>Login</Link>
        </div>
    );
}