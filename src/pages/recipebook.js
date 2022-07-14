import React, { useState } from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import RecipeCard from "../components/RecipeCard";
import "./recipebook.css";
import Modal from "../components/Modal";

export default function RecipeBook() {
    const [showModal, setView] = useState(false);

    return(
        <StandardPage>
            <Navigation />
            <div className="recipeBookMain">
                <h1>Olivia's Recipe Book</h1>
                <div className="column" style={{height: "85vh", overflowY: "auto", gap: "3vw"}}>
                    <div className="column">
                        <h1>Breakfast Recipes</h1>
                        <div className="row" style={{gap: "5vw"}}>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe2" prep="5 min" cook="5min" content="This is recipe 2"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                        </div>
                    </div>
                    <h1>Lunch Recipes</h1>
                    <div className="column">
                        <div className="row" style={{gap: "5vw"}}>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                        </div>
                    </div>
                    <h1>Dinner Recipes</h1>
                    <div className="column">
                        <div className="row" style={{gap: "5vw"}}>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                        </div>
                    </div>
                    </div>
                </div>
        </StandardPage>
    );
}