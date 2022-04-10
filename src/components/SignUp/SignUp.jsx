import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase.init'




const SignUp = () => {
    const [formError, setError] = useState('');
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);



    const handleCreateAccount = (e) => {
        e.preventDefault();


        if(password.current.value !== confirmPassword.current.value){
            setError("Two passwords dont match")
            return
        }
        else{
            setError("")
            createUserWithEmailAndPassword(email.current.value, password.current.value)
            if(user){
                    navigate('/')
            }
            
        }
    }

    return (
        <div className="login-page">
        <form className="form-container" onSubmit={handleCreateAccount}>
            <h2>Register</h2>
            <input type="email" ref={email} name="" placeholder="Email" id="signup-email" required />
            <input type="password" ref={password} name="" placeholder="Password" id="signup-password"  required/>
            <input type="password" ref={confirmPassword} name="" placeholder="Confirm Password" id="signup-confirm-password" required />
            <p style={{color:"red"}}>{formError || error?.message}</p>
            <div className="btn-container">
                <input type="submit" value="Register" />
                <Link to='/login'>Already a member ? Login</Link>
            </div>
        </form>
    </div>
    );
};

export default SignUp;