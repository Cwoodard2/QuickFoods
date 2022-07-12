import React, {useState, useEffect} from "react";
import Navigation from "../components/Navigation";
import StandardPage from "../components/StandardPage";
import RecipeCard from "../components/RecipeCard";
import "./homepage.css"

export default function Homepage() {
    return (
        <StandardPage>
            <Navigation />
            <div className="homepageMain">
                <h1>Good Evening, Olivia</h1>
                <div className="recipeCards row">
                    <div>
                        <h2>Recipe Suggestions</h2>
                        <div className="recipeSuggestions row">
                            <RecipeCard />
                            <RecipeCard />
                        </div>
                    </div>
                    <div>
                        <h2>Recipe Suggestions</h2>
                        <div className="recipeSuggestions row">
                            <RecipeCard />
                            <RecipeCard />
                        </div>
                    </div>
                </div>
            </div>
        </StandardPage>
    );
};