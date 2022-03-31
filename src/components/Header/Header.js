import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>

        <div className="container nav">
        <div id="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlinks">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/orders">Orders</a></li>
                    <li><a href="/inventory">Manage Inventory</a></li>
                </ul>
            </div>
        </div>

        </nav>
    );
};

export default Header;