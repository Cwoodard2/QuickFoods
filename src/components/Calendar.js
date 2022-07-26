import React from "react";
import "./Calendar.scss";

export default function Calendar() {
    var date = new Date();
    var getDay = date.getDay();
    var getDate = date.getDate();
    var getMonth = date.getMonth();

    const addRecipe = (whichMeal) => {
        console.log(whichMeal);
        return "this is a word";
    }

    return(
        <div>
            <div className="calendar-day">
                <h3>{getDate} {getDay} {getMonth}</h3>
                <h4>Breakfast</h4>
                <button onClick={() => addRecipe("breakfast")}>Add a recipe</button>
                <h4>Lunch</h4>
                <button onClick={() => addRecipe("lunch")}>Add a recipe</button>
                <h4>Dinner</h4>
                <button onClick={() => addRecipe("dinner")}>Add a recipe</button>
            </div>
        </div>
    )
}