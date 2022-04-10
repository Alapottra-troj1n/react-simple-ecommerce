import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }

    return (
        <nav>
        <div className="container nav">
        <div id="logo">
                <Link to="/"><img src='https://cdn-icons-png.flaticon.com/512/2919/2919940.png' alt="" /></Link>   
            </div>
            <div className="navlinks">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    {!user && <li><Link to="/login">Login</Link></li> }
                    <li><Link to="/inventory">Manage Inventory</Link></li>
                    { user && <li><button className="log-out-btn" onClick={handleLogout}>Log Out</button></li>}
                </ul>
            </div>
        </div>

        </nav>
    );
};

export default Header;