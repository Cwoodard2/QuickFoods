import React from "react";
import "./Navigation.css";
import Navbutton from "./Navbutton";
import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="navigation">
            <Link to="/">
                <button>LOGO</button>
            </Link>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/RecipeBook">
                <button>Recipe Book</button>
            </Link>
            <Link to="/GroceryList">
                <button>Grocery List</button>
            </Link>
            <Link to="/Calender">
                <button>Calender</button>
            </Link>
        </div>
    );
}