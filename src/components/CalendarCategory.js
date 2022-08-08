import React, {useState, useEffect} from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../database/authContext";
import "./CalendarCategory.scss";
import RecipeCard from "./RecipeCard";

export default function CalendarCategory(props) {
    const [details, setDetails] = useState("details-hidden");
    const [recipeShow, setRecipeShow] = useState("");
    const [recipeSet, setRecipeSet] = useState(false);
    const [recipeToShow, setRecipeToShow] = useState('');
    const [buttonShow, setButtonShow] = useState("recipe-button");
    const [recipes, setRecipes] = useState([]);
    const {currentUser} = useAuth();

    var recipe = {
        Name: "Placeholder",
        Prep: "1 min",
        Cook: "2 min"
    }

    useEffect(() => {
        // const fectchData = async () => {
        // console.log("data here");
        // const docRef = doc(db, "Users", currentUser.uid);
        // const docSnap = await getDoc(docRef);
        // const docData = docSnap.data();
        // const breakfastRecipes = docData.BreakfastRecipes;
        // console.log(breakfastRecipes);
        // setRecipes(breakfastRecipes.map((recipe) => <option>{recipe.Name}</option>));
        // }

        const isRecipeSet = () => {
            if (!recipeSet) {
                setRecipeShow("calendar-item-hidden");
            } else {
                setRecipeShow("calendar-item");
            }
        }

        isRecipeSet();
        // fectchData();
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
        setRecipeToShow(<RecipeCard recipe="Toast" prepTime="0 min" cook="10 min" content="It is toast" instructions="put in toaster" prep={['bread']} attributes={[]}/>)
        setRecipeShow("calendar-item");
        setRecipeSet(true);
        return "this is a word";
    }

    return(
        <div>
            <h4>{props.category}</h4>
                {/* <select>
                    {recipes}
                </select> */}
                <div onClick={() => showDetails()} className={recipeShow}>
                <button className="delete-button" onClick={() => deleteRecipe()}>X</button>
                    {/* <p>{recipe.Name} <button className="delete-button" onClick={() => deleteRecipe()}>X</button></p>
                    <div className={details}>
                        <p>{recipe.Prep}</p>
                        <p>{recipe.Cook}</p>
                    </div> */}
                    {recipeToShow}
                </div>
                <button onClick={() => addRecipe(props.category)} className={buttonShow}>Add a recipe</button>
        </div>
    )
}