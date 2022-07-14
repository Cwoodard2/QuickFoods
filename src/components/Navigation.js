import React from "react";
import "./Navigation.css";
import Navbutton from "./Navbutton";
import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="navigation">
            <Link to="/homepage">
                <button>LOGO</button>
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