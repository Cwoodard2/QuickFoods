import React from "react";
import StandardPage from "../components/StandardPage";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../database/authContext";

export default function Login() {
    const {login, createUser} = useAuth();
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
            await createUser(document.getElementById("username").value, document.getElementById("password").value);
            console.log("created");
            navigate("/homepage");
        } catch {
            console.log("creation failed failed");
        }
    }
    return(
       <StandardPage >
            <div className="forms">
                <form onSubmit={handleSubmit} className="form">
                    <input id="username" placeholder="Email" className="form-input login-form"></input>
                    <input id="password" placeholder="Password" className="form-input login-form"></input>
                    <input type="submit" value="login" className="form-button"/>
                </form>
                <form onSubmit={handleCreate} className="form">
                    <input id="username" placeholder="username" className="form-input create-form"></input>
                    <input id="password" placeholder="password" className="form-input create-form"></input>
                    <input type="submit" value="Create Account" className="form-button"/>
                </form>
            </div>
       </StandardPage>
    );
}