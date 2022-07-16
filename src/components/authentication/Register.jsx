import './Register.css'

import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../connect_firebase/firebaseAuthentication';

import { useNavigate } from 'react-router-dom';

export default function Register() {


    const [RegisterEmail,      setRegisterEmail]      = useState("");
    const [RegisterPassword,   setRegisterPassword]   = useState("");

    let navigate = useNavigate();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                RegisterEmail,
                RegisterPassword
            );
            navigate('/');
        } catch (error) {
            console.log(error.message);
        } 
    }
    
    return (
    <div className="register">
        
        <div className="col-12 register-email">
            <input placeholder="Enter your email" onChange={(e) => {setRegisterEmail(e.target.value)}}/>
        </div>

        <div className="col-12 register-password">
            <input placeholder="Enter your password" onChange={(e) => {setRegisterPassword(e.target.value)}}/>
        </div>

        <button type="button" class="btn btn-outline-primary" onClick={register}> Register </button>

    </div>
    );
}