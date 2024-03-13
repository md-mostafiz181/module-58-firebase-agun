import React, { useState } from 'react';

import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const [user,setUser]=useState(null)

    const auth=getAuth(app)
    const provider= new GoogleAuthProvider();

    const handleGoogleLogin=()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const loggedUser =result.user;
            setUser(loggedUser);

        })
        .catch(error=>{
            console.log("error", error.message)
        })
    }


    const handleSingOut =()=>{
        signOut(auth)
        .then(()=>{
            alert("signOut successfull")
            setUser(null)

        })
        .catch((error)=>{
            console.log("error", error.message)
        })
    }
    return (
        <div>
            <h2>Login</h2>

            {
                user ?
                <button onClick={handleSingOut}>Google SignOut</button> :
                <button onClick={handleGoogleLogin}>Google Login</button>
            }
            
            
           {
            user &&   
            <div>
                    <h3>User : {user.displayName}</h3>
                    <h4>Email: {user.email}</h4>
                    <img src={user.photoURL} alt="" />
            </div>

           }
        </div>
    );
};

export default Login;