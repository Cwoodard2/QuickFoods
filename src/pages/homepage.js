import React, {useState, useEffect} from "react";
import Navigation from "../components/Navigation";
import StandardPage from "../components/StandardPage";
import "./homepage.css"

export default function Homepage() {
    return (
        <StandardPage>
            <Navigation />
            <div className="homepageMain">
                <h1>Good Evening, Olivia</h1>
            </div>
        </StandardPage>
    );
};