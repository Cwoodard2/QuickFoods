import React, { useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../database/authContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import "./CreateRecipeModal.scss";

export default function CreateRecipeModal(props) {
    const {currentUser} = useAuth();
    const [ingredients, setIngredients] = useState([]);
    const [step1, setStep1] = useState("show-column");
    const [step2, setStep2] = useState("no-show-column");
    const [step3, setStep3] = useState("no-show-column");
    

    if (!props.show) {
        return null;
    }

    function changeStep(stepChange) {
        switch(stepChange) {
            case "step1":
                setStep1("show-column");
                setStep2("no-show-column");
                setStep3("no-show-column")
                break;
            case "step2":
                setStep1("no-show-column");
                setStep2("show-column");
                setStep3("no-show-column")
                break;
            case "step3":
                setStep1("no-show-column")
                setStep2("no-show-column");
                setStep3("show-column");
                break;
            default:
                break;
        }
    }

    function addItem() {
        const newList = ingredients.concat(document.getElementById("ingredients").value);
        document.getElementById("ingredients").value = "";
        setIngredients(newList);
    }

    const cleanData = (dataToClean) => {
        console.log("in clean");
        for (let key in dataToClean) {
            let value = dataToClean[key];
            console.log(value);
            if (value == "") {
                return false;
            }
            console.log(key, value);
          }
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

        console.log(cleanData(recipeData));
        if(!cleanData(recipeData)) {
            console.log("unclean data");
            alert("Some fields had data input incorrectly or were left blank. Please try again.");
            return;
        }

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


        function newRecipeLoad() {
            return props.recipeLoad();
        }

        function closeModal() {
            return props.onClose();
        }

        newRecipeLoad();
        closeModal();
    }

    const categoryItems = ingredients.map((items) => <li key={items} className="">{items}</li>);

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="create-modal-content" onClick={e => e.stopPropagation()}>
                <h2 style={{alignSelf: "flex-start", justifySelf: "flex-start", paddingLeft: "1vw"}}>Create Recipe</h2>
                <div className="row" style={{width: "100vw", justifyContent: "space-evenly", alignItems: "flex-start"}}>
                    <div className={step1}>
                        <h3 style={{textAlign: "center", whiteSpace: "break-spaces"}}>Let's get you started with a recipe name and description.</h3>
                        <input id="whichRecipe" placeholder="Breakfast, Lunch, or Dinner?" className="input"></input>
                        <input id="recipeName" placeholder="Recipe Name" className="input"></input>
                        <textarea rows="4" cols="25" id="description" placeholder="Description" className="input"></textarea>
                        <button className="add-item-button" onClick={() => changeStep("step2")}>Next Step</button>
                    </div>
                    <div className={step2}>
                        <h3>Now let's add the time needed to prep <br></br>and cook and the cooking instructions.</h3>
                        <input id="prepTime" placeholder="Prep Time" className="input"></input>
                        <input id="cookTime" placeholder="Cook Time" className="input"></input>
                        <textarea rows="4" cols="4" id="instructions" placeholder="Cooking Instructions" className="input"></textarea>
                        <div className="row" style={{padding: "2vw", gap: "2vw"}}>
                            <button className="add-item-button" onClick={() => changeStep("step1")}>Previous Step</button>
                            <button className="add-item-button" onClick={() => changeStep("step3")}>Next Step</button>
                        </div>
                    </div>
                    <div className={step3}>
                         <div>
                            <h3>And finally let's add the ingredients <br></br>and some special tags</h3>
                            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                                <input id="ingredients" type="text" 
                                placeholder="Add an ingredient" className="add-item-input"></input>
                                <button className="add-item-button" onClick={() => addItem()}>Add Item</button>
                            </div>
                                <ul>{categoryItems}</ul>
                            </div>
                        <div className="row" style={{gap: "1vw"}}>
                            <label for="gluten-free">
                                Is gluten-free? <input id="gluten-free" type="checkbox" value="Gluten Free" className="add-recipe-checkbox"></input>
                            </label>
                            <label for="vegan">
                                Is vegan? <input id="vegan" type="checkbox" value="Vegan" className="add-recipe-checkbox"></input>
                            </label>
                        </div>
                        <button className="add-item-button" onClick={() => changeStep("step2")}>Previous Step</button>
                    </div>
                </div>
                <button onClick={() => WriteDataToDB()} className="add-recipe-button">Add Recipe</button>
            </div>
        </div>
    );
}