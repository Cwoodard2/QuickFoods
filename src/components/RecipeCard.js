import React from "react";
import "./RecipeCard.css";

export default function RecipeCard(props) {

    return(
        <div className="recipeCardMain">
            <h1>Space For Picture!</h1>
            <div className="recipeCardContent">
                <h3>Recipe Name</h3>
                <div>
                    <p>0 min Prep</p>
                    <p>10 min Cook</p>
                </div>
            </div>
            <p>This is a description of what the food is!</p>
        </div>
    );
}