import React from "react";
import "./Navigation.css";
import Logo from "../images/LogoForQuickFoods.png";
import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="navigation">
            <Link to="/homepage">
                <img src={Logo} style={{width: "7vw", height: "14vh"}}/>
            </Link>
            <Link to="/homepage">
                <button className="navButton">&#8962;</button>
            </Link>
            <Link to="/RecipeBook">
                <button className="navButton">&#128214;</button>
            </Link>
            <Link to="/GroceryList">
                <button className="navButton">&#128220;</button>
            </Link>
            <Link to="/Calender">
                <button className="navButton">&#128198;</button>
            </Link>
        </div>
    );
}