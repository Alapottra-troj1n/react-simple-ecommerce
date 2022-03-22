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
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                </ul>
            </div>
        </div>

        </nav>
    );
};

export default Header;