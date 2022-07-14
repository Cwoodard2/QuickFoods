import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div>
            <input placeholder="username"></input>
            <input placeholder="password"></input>
            <Link to="/homepage">
                <button>Login</button>
            </Link>
        </div>
    );
}