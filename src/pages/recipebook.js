import React, { useEffect, useState } from "react";
import { fillArray } from "../database/firebaseInterface";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import RecipeCard from "../components/RecipeCard";
import "./recipebook.css";
import CreateRecipeModal from "../components/CreateRecipeModal";

export default function RecipeBook(props) {
    const [showCreateModal, setCreate] = useState(false);
    const [fillRecipes, setFillRecipes] = useState({});
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);

    var breakfastRecipes;

    useEffect(() => {
        const fetchData = async () => {
          const list = await fillArray();
          setFillRecipes(list);
          setBreakfast(list.BreakfastRecipes);
          setLunch(list.LunchRecipes);
          setDinner(list.DinnerRecipes);
        }

        console.log("Fetching Data");
        fetchData();
    }, []);

    breakfastRecipes = fillRecipes.BreakfastRecipes;

    console.log(breakfastRecipes);
    console.log(breakfast);
    // {() => {
    //     const breakfastTime = fillRecipes.BreakfastRecipes.map(recipes => <li><RecipeCard recipe={recipes.Name} prep={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description}/></li>);
    //     return breakfastTime;
    //     }};

        function makeList() {
            const breakfastTime = breakfast.map((recipes) => <li className="recipeList"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep}/></li>);
            return breakfastTime;
        };

        function makeList2() {
            const lunchTime = lunch.map((recipes) => <li className="recipeList"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep}/></li>);
            return lunchTime;
        };

        function makeList3() {
            const dinnerTime = dinner.map((recipes) => <li className="recipeList"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep}/></li>);
            return dinnerTime;
        };

        const thisBreakfast = makeList();
        const thisLunch = makeList2();
        const thisDinner = makeList3();

    return(
        <StandardPage>
            <Navigation />
            <div className="recipeBookMain">
                <div className="row" style={{gap: "2vw", alignItems: "center"}}>
                    <h1>Olivia's Recipe Book</h1>
                    <button onClick={()=>setCreate(true)} className="addButton">&#43;</button>
                </div>
                <CreateRecipeModal title={props.recipe} content={props.content} onClose={() => setCreate(false)} show={showCreateModal}/>
                <div className="column" style={{overflowY: "auto", gap: "3vw"}}>
                    <div className="column">
                        <h1>Breakfast Recipes</h1>
                            <ul className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                                {thisBreakfast}
                            </ul>
                    </div>
                    <div className="column">
                        <h1>Lunch Recipes</h1>
                        <ul className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                            {thisLunch}
                        </ul>
                    </div>
                    <div className="column">
                        <h1>Dinner Recipes</h1>
                        <ul className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                            {thisDinner}
                        </ul>
                    </div>
                    </div>
                </div>
        </StandardPage>
    );
}