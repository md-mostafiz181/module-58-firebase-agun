import React from 'react';

import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const auth=getAuth(app)
    const provider= new GoogleAuthProvider();

    const handleGoogleLogin=()=>{
        console.log("google mama kaj kortese")
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Login;