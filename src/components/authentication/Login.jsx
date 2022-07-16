import './Login.css'

import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../connect_firebase/firebaseAuthentication';

import { useNavigate  } from 'react-router-dom';

import Register from './Register'

export default function Login() {

    const [LoginEmail,      setLoginEmail]      = useState("");
    const [LoginPassword,   setLoginPassword]   = useState("");

    let navigate = useNavigate();

    const login = async () => {

        const user = await signInWithEmailAndPassword(
            auth,
            LoginEmail,
            LoginPassword
        );

        if (auth.currentUser != null) {
           navigate('/infostudent', { replace: true });
        }
    }

    return (
    <div className="login">
        <div className="col-12 login-email">
            <input placeholder="Enter your email" onChange={(e) => {setLoginEmail(e.target.value)}}/>
        </div>

        <div className="col-12 login-password">
            <input placeholder="Enter your password" onChange={(e) => {setLoginPassword(e.target.value)}}/>
        </div>

        <button type="button" class="btn btn-outline-primary" onClick={login}> Login </button>

        <div className="col-12 or-register">
            <h6> or register ? </h6>
        </div>

    </div>
    );
}