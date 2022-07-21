import React from "react";
import "./Navigation.scss";
import Logo from "../images/LogoForQuickFoods.png";
import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="navigation">
            <Link to="/homepage">
                <img src={Logo} style={{width: "7vw", height: "14vh"}}/>
            </Link>
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
    );
}