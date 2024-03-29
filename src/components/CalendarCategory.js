import React, {useState, useEffect} from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../database/authContext";
import "./CalendarCategory.scss";
import RecipeCardCompact from "./RecipeCardCompact";

export default function CalendarCategory(props) {
    const [details, setDetails] = useState("details-hidden");
    const [recipeShow, setRecipeShow] = useState("");
    const [recipeSet, setRecipeSet] = useState(true);
    const [recipeToShow, setRecipeToShow] = useState('');
    const [buttonShow, setButtonShow] = useState("recipe-button");
    const [recipes, setRecipes] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const {currentUser} = useAuth();
    const selectID = "recipe-select-" + props.category + "-" + props.day;
    const deleteButtonID =  "delete-button-" + props.category + "-" + props.day;

    useEffect(() => {
        const fectchData = async () => {
        if (props.category === "Breakfast") {
            var recipeToGet = "BreakfastRecipes";
        }

        if (props.category === "Lunch") {
            var recipeToGet = "LunchRecipes";
        }

        if (props.category === "Dinner") {
            var recipeToGet = "DinnerRecipes";
        }

        const docRef = doc(db, "Users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data();
        const loadRecipes = docData[recipeToGet];
        console.log(loadRecipes);

        //Stuff to load a day from database
        if (docData[props.day][props.category][0]) {
            var recipeToUse = docData[props.day][props.category][1];
            console.log(recipeToUse);
            setRecipeToShow(<RecipeCardCompact recipe={recipeToUse.Name} prepTime={recipeToUse.PrepTime} cook={recipeToUse.CookTime} content={recipeToUse.Description} instructions={recipeToUse.Cook} prep={recipeToUse.Prep} attributes={recipeToUse.Attributes}/>);
            setRecipeSet(false);
        }


        setAllRecipes(loadRecipes);
        setRecipes(loadRecipes.map((recipe, index) => <option id={index} value={recipe.Name}>{recipe.Name}</option>));
        if (!recipeSet) {
            setRecipeShow("calendar-item-hidden");
        } else {
            setRecipeShow("calendar-item");
        }
    }

        fectchData();
    }, []
    );

    const deleteRecipe = async () => {
        // setRecipeShow("calendar-item-hidden");
        const addItemRef = doc(db, "Users", currentUser.uid);
        const newList = [false, {}];
        await updateDoc(addItemRef, {
            [props.day + "." + props.category]: newList
        });
        setButtonShow("recipe-button");
        setRecipeToShow("");
        setRecipeSet(false);
    }

    const showDetails = () => {
        if (details === "details-hidden") {
            setDetails("details");
        } else {
            setDetails("details-hidden");
        }
    }

    const addRecipe = async (whichMeal) => {
        setButtonShow("recipe-button-hidden");
        for(var i=0; i < allRecipes.length; i++) {
            //putting in logic for database to save state
            if (document.getElementById(selectID).value == allRecipes[i].Name) {
                const addItemRef = doc(db, "Users", currentUser.uid);
                const newList = [true, allRecipes[i]];
                await updateDoc(addItemRef, {
                    [props.day + "." + props.category]: newList
                });

                setRecipeToShow(<RecipeCardCompact recipe={allRecipes[i].Name} prepTime={allRecipes[i].PrepTime} cook={allRecipes[i].CookTime} content={allRecipes[i].description} instructions={allRecipes[i].cook} prep={allRecipes[i].prep} attributes={allRecipes[i].attributes}/>);
                break;
            }
        }
        setRecipeShow("calendar-item");
        setRecipeSet(true);
    }

    return(
        <div>
            <h4>{props.category}</h4>
            <select id={selectID} name={selectID}>
                        {recipes}
                    </select>
                    <button id={deleteButtonID} className="delete-button" onClick={() => deleteRecipe()}>X</button>
                <div onClick={() => showDetails()} className={recipeShow}>
                    {recipeToShow}
                </div>
                <button id="add-button" onClick={() => addRecipe(props.category)} className={buttonShow}>Add a recipe</button>
        </div>
    )
}