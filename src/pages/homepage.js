import React, {useState, useEffect} from "react";
import Navigation from "../components/Navigation";
import StandardPage from "../components/StandardPage";
import RecipeCard from "../components/RecipeCard";
import "./homepage.css"

export default function Homepage() {
    var date = new Date();
    var currentTime = date.getHours();
    console.log(typeof currentTime);
    var mealSuggestions;

    if (parseInt(currentTime) >= 0 && parseInt(currentTime) <= 11){
        mealSuggestions = "Breakfast";
    } else if(parseInt(currentTime) >= 12 && parseInt(currentTime) <= 16) {
        mealSuggestions = "Lunch";
    } else if(currentTime >= 17 && currentTime <= 21) {
        mealSuggestions = "Dinner";
    }
    return (
        <StandardPage>
            <Navigation />
            <div className="homepageMain">
                <h1>Good Evening, Olivia</h1>
                <div className="recipeCards">
                    <div className="column">
                        <h2 style={{color: "#e68a00"}}>{mealSuggestions} Suggestions</h2>
                        <div className="recipeSuggestions row">
                            <RecipeCard />
                            <RecipeCard />
                        </div>
                    </div>
                    <div className="column">
                        <h2>Snack Suggestions</h2>
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