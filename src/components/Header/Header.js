import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>nk>
        <div className="container nav">
        <div id="logo">
                <Link to="/"><img src='https://cdn-icons-png.flaticon.com/512/2919/2919940.png' alt="" /></Link>   
            </div>
            <div className="navlinks">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/inventory">Manage Inventory</Link></li>
                </ul>
            </div>
        </div>

        </nav>
    );
};

export default Header;