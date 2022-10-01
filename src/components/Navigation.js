import React from "react";
import "./Navigation.scss";
import Logo from "../images/quickfoods-new-logo.png";
import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="navigation">
            <Link to="/homepage">
                <img src={Logo} style={{width: "5vw", height: "5vw", alignSelf: "flex-start", justifySelf: "flex-start"}}/>
            </Link>
            <div style={{display: "flex", gap: "2vw", padding: "1vw", width: "inherit", display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                <Link to="/homepage">
                    <button className="nav-button">Home</button>
                </Link>
                <Link to="/RecipeBook">
                    <button className="nav-button">Recipe Book</button>
                </Link>
                <Link to="/GroceryList">
                    <button className="nav-button">Grocery List</button>
                </Link>
                <Link to="/Calender">
                    <button className="nav-button">Calender</button>
                </Link>
            </div>
        </div>
    );
}