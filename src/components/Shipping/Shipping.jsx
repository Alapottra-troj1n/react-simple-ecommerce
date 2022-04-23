import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth);
    const [formError, setError] = useState('');
    const email = useRef(null);
    const address = useRef(null);
    const phoneNumber = useRef(null);
    const name = useRef(null);
  
    
    const handleShipping = (e) => {
        e.preventDefault();
        const shippingDetails = {email : email.current.value, name : name.current.value, address : address.current.value, phoneNumber : phoneNumber.current.value};

        console.log(shippingDetails);
    }
    

    return (
        <div className="login-page">
        <form className="form-container" onSubmit={handleShipping}>
            <h2>Shipping Information</h2>
            <input type="text" ref={name} name="" placeholder="Your Name" id="signup-email" required />
            <input type="email" ref={email} name="" placeholder="Email" id="signup-email" required />
            <input type="address" ref={address} name="" placeholder="Address" id="shipping-address"  required/>
            <input type="phone number" ref={phoneNumber} name="" placeholder="Phone Number" id="shipping-phone-number" required />
            <p style={{color:"red"}}>{formError}</p>
            <div className="btn-container">
                <input type="submit" value="Proceed to Checkout" />
            </div>
        </form>
    </div>
    );
};

export default Shipping;