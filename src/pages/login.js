import React, { useState } from "react";
import StandardPage from "../components/StandardPage";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../database/authContext";

export default function Login() {
    const {login, createUser} = useAuth();
    const navigate = useNavigate()
    // const [loginForm, setLoginForm] = useState("form login-form-active");
    // const [createForm, setCreateForm] = useState("form create-form-inactive");
    // var formButton = "Create an account";

    // function switchForm() {
    //     if(createForm == "form create-form-inactive") {
    //         setCreateForm("form create-form-active");
    //         setLoginForm("form login-form-inactive");
    //         formButton = "Login";
    //     } else {
    //         setCreateForm("form create-form-inactive");
    //         setLoginForm("form login-form-active");
    //         formButton = "Create an account";
    //     }
    // }
    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            console.log(document.getElementById("username").value + document.getElementById("password").value)
            console.log(login());
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
            await createUser(document.getElementById("username").value, document.getElementById("password").value);
            console.log("created");
            navigate("/homepage");
        } catch {
            console.log("creation failed failed");
        }
    }
    return(
       <StandardPage>
            <div className="forms">
                <h1 style={{color: "#2568FB"}}>QuickFoods</h1>
                <p style={{color: "#2568FB"}}>Your food planning simplified</p>
                <form onSubmit={handleSubmit} className="form login-form">
                    <input id="username" placeholder="Email" className="form-input"></input>
                    <input id="password" placeholder="Password" className="form-input"></input>
                    <input type="submit" value="login" className="form-button"/>
                </form>
                <form onSubmit={handleCreate} className="form create-form">
                    <input id="username" placeholder="username" className="form-input"></input>
                    <input id="password" placeholder="password" className="form-input"></input>
                    <input type="submit" value="Create Account" className="form-button"/>
                </form>
                <button>Create an account</button>
            </div>
       </StandardPage>
    );
}