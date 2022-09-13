import React, { useEffect, useState } from "react";
import "./Calendar.scss";
import CalendarCategory from "./CalendarCategory";

export default function Calendar(props) {
    const [details, setDetails] = useState("details-hidden");
    const [recipeShow, setRecipeShow] = useState("");
    const [recipeSet, setRecipeSet] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    var dayOfWeek = props.day;
    var date = new Date();
    var getDay = date.getDay();
    var getDate = date.getDate();
    var getMonth = date.getMonth();
    var recipe = {
        Name: "Placeholder",
        Prep: "1 min",
        Cook: "2 min"
    }

    useEffect(() => {
        const isRecipeSet = () => {
            if (!recipeSet) {
                setRecipeShow("calendar-item-hidden");
            } else {
                setRecipeShow("calendar-item");
            }
        }

        isRecipeSet();
    }
    )

    const addRecipe = (whichMeal) => {
        setRecipeShow("calendar-item");
        setRecipeSet(true);
        return "this is a word";
    }

    const showDetails = () => {
        if (details === "details-hidden") {
            setDetails("details");
        } else {
            setDetails("details-hidden");
        }
    }

    if (props.setDay != props.day) {
        return;
    }

    return(
        <div>
            <div className="calendar-day">
                {/* <h3>{dayOfWeek}</h3> */}
                {/* <h4>Breakfast</h4>
                <div onClick={() => showDetails()} className={recipeShow}>
                    <p>{recipe.Name}</p>
                    <div className={details}>
                        <p>{recipe.Prep}</p>
                        <p>{recipe.Cook}</p>
                    </div>
                </div>
                <button onClick={() => addRecipe("breakfast")} className="recipe-button">Add a recipe</button> */}
                <CalendarCategory category="Breakfast" day={props.day}/>
                {/* <h4>Lunch</h4>
                <button onClick={() => addRecipe("lunch")} className="recipe-button">Add a recipe</button> */}
                <CalendarCategory category="Lunch" day={props.day}/>
                {/* <h4>Dinner</h4>
                <button onClick={() => addRecipe("dinner")} className="recipe-button">Add a recipe</button> */}
                <CalendarCategory category="Dinner" day={props.day}/>
            </div>
        </div>
    )
}