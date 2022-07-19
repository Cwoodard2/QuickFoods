import React from "react";
import { db } from "../firebase";
import { useAuth } from "../database/authContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import "./CreateRecipeModal.scss";

export default function CreateRecipeModal(props) {
    const {currentUser} = useAuth();

    if (!props.show) {
        return null;
    }

    async function WriteDataToDB() {
        var recipe;
        
        var recipeData = {
            Name: document.getElementById("recipeName").value,
            PrepTime: document.getElementById("prepTime").value,
            CookTime: document.getElementById("cookTime").value,
            Description: document.getElementById("description").value,
            Prep: document.getElementById("prep").value,
            Cook: document.getElementById("instructions").value
        }

        console.log(recipeData);
        const jerryRefDoc = doc(db, "Users", currentUser.uid);

        switch(document.getElementById("whichRecipe").value) {
            case "Breakfast":
                recipe = "BreakfastRecipes";
                await updateDoc(jerryRefDoc, {
                    BreakfastRecipes: arrayUnion(recipeData)
                });
                break;
            case "Lunch":
                recipe = "LunchRecipes";
                await updateDoc(jerryRefDoc, {
                    LunchRecipes: arrayUnion(recipeData)
                });
                break;
            case "Dinner":
                recipe = "DinnerRecipes";
                await updateDoc(jerryRefDoc, {
                    DinnerRecipes: arrayUnion(recipeData)
                });
                break;
            default:
                break;
        };


        function closeModal() {
            return props.onClose();
        }

        closeModal();
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2 style={{alignSelf: "flex-start", justifySelf: "flex-start", paddingLeft: "1vw"}}>Create Recipe</h2>
                <input id="whichRecipe" placeholder="Breakfast, Lunch, or Dinner?"></input>
                <input id="recipeName" placeholder="Recipe Name" className="input"></input>
                <input id="prepTime" placeholder="Prep Time" className="input"></input>
                <input id="cookTime" placeholder="Cook Time" className="input"></input>
                <input id="description" placeholder="Description" className="input"></input>
                <input id="prep" placeholder="Prep and Ingredients" className="input"></input>
                <input id="instructions" placeholder="Cooking Instructions" className="input"></input>
                <div className="row" style={{gap: "1vw"}}>
                    <label for="gluten-free">
                        Is gluten-free? <input id="gluten-free" type="checkbox" value="Yes" className="add-recipe-checkbox"></input>
                    </label>
                    <label for="vegan">
                        Is vegan? <input id="vegan" type="checkbox" value="Yes" className="add-recipe-checkbox"></input>
                    </label>
                </div>
                <button onClick={() => WriteDataToDB()} className="add-recipe-button">Add Recipe</button>
            </div>
        </div>
    );
}