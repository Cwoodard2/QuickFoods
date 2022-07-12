import React from "react";
import "./Navigation.css";
import Navbutton from "./Navbutton";

export default function Navigation() {
    return(
        <div className="navigation">
            <Navbutton whichPage="LOGO" />
            <Navbutton whichPage="Home" />
            <Navbutton whichPage="Recipe Book" />
            <Navbutton whichPage="Gorcery List" />
            <Navbutton whichPage="Calender" />
        </div>
    );
}