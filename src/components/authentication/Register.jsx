import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../connect_firebase/firebaseConfig';

export default function Register() {


    const [RegisterEmail,      setRegisterEmail]      = useState("");
    const [RegisterPassword,   setRegisterPassword]   = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                RegisterEmail,
                RegisterPassword
            );
        } catch (error) {
            console.log(error.message);
        } 
    }
    
    return (
    <div>
        <input placeholder="Enter your email" onChange={(e) => {setRegisterEmail(e.target.value)}}/>
        <input placeholder="Enter your password" onChange={(e) => {setRegisterPassword(e.target.value)}}/>
        <button onClick={register}> Register </button>
    </div>
    );
}