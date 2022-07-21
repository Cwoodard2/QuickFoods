import React, { useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../database/authContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import "./CreateRecipeModal.scss";

export default function CreateRecipeModal(props) {
    const {currentUser} = useAuth();
    const [ingredients, setIngredients] = useState([]);

    if (!props.show) {
        return null;
    }

    function addItem() {
        const newList = ingredients.concat(document.getElementById("ingredients").value);
        document.getElementById("ingredients").value = "";
        setIngredients(newList);
    }


    async function WriteDataToDB() {
        var recipe;
        var attributes = [];
        if(document.getElementById("gluten-free").checked) {
            attributes.push(document.getElementById("gluten-free").value);
        }

        if (document.getElementById("vegan").checked) {
            attributes.push(document.getElementById("vegan").value);
            console.log(attributes);
        }
        
        var recipeData = {
            Name: document.getElementById("recipeName").value,
            PrepTime: document.getElementById("prepTime").value,
            CookTime: document.getElementById("cookTime").value,
            Description: document.getElementById("description").value,
            Prep: ingredients,
            Cook: document.getElementById("instructions").value,
            Attributes: attributes
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

    const categoryItems = ingredients.map((items) => <li key={items} className="">{items}</li>);

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="create-modal-content" onClick={e => e.stopPropagation()}>
                <h2 style={{alignSelf: "flex-start", justifySelf: "flex-start", paddingLeft: "1vw"}}>Create Recipe</h2>
                <input id="whichRecipe" placeholder="Breakfast, Lunch, or Dinner?"></input>
                {/* <input type="radio">Radio</input> */}
                <input id="recipeName" placeholder="Recipe Name" className="input"></input>
                <div className="row" style={{width: "60vw", justifyContent: "space-evenly", alignItems: "flex-start"}}>
                    <div className="column" style={{justifyContent: "space-evenly", minHeight: "40vh"}}>
                        {/* <input id="description" placeholder="Description" className="input" size="50" height="10vw"></input>
                        <input id="prep" placeholder="Prep and Ingredients" className="input"></input>
                        <input id="instructions" placeholder="Cooking Instructions" className="input"></input> */}
                        <textarea rows="4" cols="25" id="description" placeholder="Description" className="input"></textarea>
                        <textarea rows="4" cols="4" id="instructions" placeholder="Cooking Instructions" className="input"></textarea>
                    </div>
                    <div className="column" style={{justifyContent: "space-evenly", minHeight: "40vh"}}>
                        <input id="prepTime" placeholder="Prep Time" className="input"></input>
                        <input id="cookTime" placeholder="Cook Time" className="input"></input>
                        {/* <textarea rows="4" cols="4" id="prep" placeholder="Prep and Ingredients" className="input"></textarea> */}
                        <div className="row" style={{gap: "1vw"}}>
                            <label for="gluten-free">
                                Is gluten-free? <input id="gluten-free" type="checkbox" value="Gluten Free" className="add-recipe-checkbox"></input>
                            </label>
                            <label for="vegan">
                                Is vegan? <input id="vegan" type="checkbox" value="Vegan" className="add-recipe-checkbox"></input>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input id="ingredients" type="text" 
                            placeholder="Add an ingredient" className="add-item-input"></input>
                            <button className="add-item-button" onClick={() => addItem()}>Add Item</button>
                        </div>
                        <ul>{categoryItems}</ul>
                    </div>
                </div>
                <button onClick={() => WriteDataToDB()} className="add-recipe-button">Add Recipe</button>
            </div>
        </div>
    );
}