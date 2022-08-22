import React, {useState, useEffect} from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../database/authContext";
import "./CalendarCategory.scss";
import RecipeCard from "./RecipeCard";

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

    const deleteRecipe = () => {
        // setRecipeShow("calendar-item-hidden");
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

    const addRecipe = (whichMeal) => {
        setButtonShow("recipe-button-hidden");
        for(var i=0; i < allRecipes.length; i++) {
            if (document.getElementById(selectID).value == allRecipes[i].Name) {
                setRecipeToShow(<RecipeCard recipe={allRecipes[i].Name} prepTime={allRecipes[i].PrepTime} cook={allRecipes[i].CookTime} content={allRecipes[i].description} instructions={allRecipes[i].cook} prep={allRecipes[i].prep} attributes={allRecipes[i].attributes}/>);
                break;
            }
        }
        setRecipeShow("calendar-item");
        setRecipeSet(true);
        return "this is a word";
    }

    return(
        <div>
            <h4>{props.category}</h4>
                <div onClick={() => showDetails()} className={recipeShow}>
                    <select id={selectID} name={selectID}>
                        {recipes}
                    </select>
                <button className="delete-button" onClick={() => deleteRecipe()}>X</button>
                    {recipeToShow}
                </div>
                <button id="add-button" onClick={() => addRecipe(props.category)} className={buttonShow}>Add a recipe</button>
        </div>
    )
}