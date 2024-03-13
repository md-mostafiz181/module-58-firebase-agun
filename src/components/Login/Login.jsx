import React from 'react';

import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const auth=getAuth(app)
    const provider= new GoogleAuthProvider();

    const handleGoogleLogin=()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user =result.user;
            console.log(user)

        })
        .catch(error=>{
            console.log("error", error.message)
        })
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Login;