import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="login-page">
          
            <form className="form-container">
                <h2>Login</h2>
                <input type="email" name="" placeholder="Email" id="login-email" />
                <input type="password" name="" placeholder="Password" id="login-password" />
                <div className="btn-container">
                    <input type="submit" value="Login" />
                    <Link to='/register'>Create a new account</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;