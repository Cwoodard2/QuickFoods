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
    var timeOfDay;

    if (parseInt(currentTime) >= 0 && parseInt(currentTime) <= 11){
        mealSuggestions = "Breakfast";
        timeOfDay = "Morning";
    } else if(parseInt(currentTime) >= 12 && parseInt(currentTime) <= 16) {
        mealSuggestions = "Lunch";
        timeOfDay = "Afternoon";
    } else if(currentTime >= 17 && currentTime <= 23) {
        mealSuggestions = "Dinner";
        timeOfDay = "Evening";
    }
    return (
        <StandardPage>
            <Navigation />
            <div className="homepageMain">
                <h1>Good {timeOfDay}, Olivia</h1>
                <div className="recipeCards">
                    <div className="column">
                        <h2 style={{color: "#e68a00"}}>{mealSuggestions} Suggestions</h2>
                        <div className="recipeSuggestions row">
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe2" prep="5 min" cook="5min" content="This is recipe 2"/>
                        </div>
                    </div>
                    <div className="column">
                        <h2>Snack Suggestions</h2>
                        <div className="recipeSuggestions row">
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe2" prep="5 min" cook="5min" content="This is recipe 2"/>
                        </div>
                    </div>
                </div>
            </div>
        </StandardPage>
    );
};