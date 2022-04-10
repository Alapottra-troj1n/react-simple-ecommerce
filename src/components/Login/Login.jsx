import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);



      const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email.current.value, password.current.value);
       
      }
      if(user){
        navigate('/shop')
    }

     

    return (
        <div className="login-page">
          
            <form className="form-container" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="email" name="" ref={email} placeholder="Email" id="login-email" />
                <input type="password" name="" ref={password} placeholder="Password" id="login-password" />
                {loading && <p>loading...</p>}
                <div className="btn-container">
                    <input type="submit" value="Login" />
                    <Link to='/register'>Create a new account</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;