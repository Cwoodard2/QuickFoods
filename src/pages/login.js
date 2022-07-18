import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../database/authContext";

export default function Login() {
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, document.getElementById("username").value, document.getElementById("password").value)
    //     .then((userCredential) => {
    //         const user = userCredential.user
    //         console.log("signed in");
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });
    const {login} = useAuth();
    const navigate = useNavigate()
    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            console.log(document.getElementById("username").value + document.getElementById("password").value)
            await login(document.getElementById("username").value, document.getElementById("password").value);
            console.log("sucess");
            navigate("/homepage");
        } catch {
            console.log("Sign in failed");
        }
    }

    async function handleCreate(e) {
        e.preventDefault();
        try {
            console.log(document.getElementById("username").value + document.getElementById("password").value)
            await login(document.getElementById("username").value, document.getElementById("password").value);
            console.log("sucess");
            navigate("/homepage");
        } catch {
            console.log("Sign in failed");
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id="username" placeholder="username"></input>
                <input id="password" placeholder="password"></input>
                <input type="submit" value="login"/>
            </form>
            <form onSubmit={handleCreate}>
                <input id="username" placeholder="username"></input>
                <input id="password" placeholder="password"></input>
                <input type="submit" value="Create Account"/>
            </form>
            {/* <input id="username" placeholder="username"></input>
            <input id="password" placeholder="password"></input> */}
            {/* <Link to="/homepage"> */}
            {/* <button onClick={() => handleSubmit()}>Login</button> */}
            {/* </Link> */}
        </div>
    );
}