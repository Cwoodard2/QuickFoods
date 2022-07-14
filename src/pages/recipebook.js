import React from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import RecipeCard from "../components/RecipeCard";
import "./recipebook.css";

export default function RecipeBook() {
    return(
        <StandardPage>
            <Navigation />
            <div className="recipeBookMain">
                <h1>Olivia's Recipe Book</h1>
                <div className="column" style={{height: "85vh", overflowY: "auto", gap: "3vw"}}>
                    <div className="row" style={{gap: "5vw"}}>
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                    <div className="row" style={{gap: "5vw"}}>
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                    <div className="row" style={{gap: "5vw"}}>
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                    </div>
                </div>
        </StandardPage>
    );
}