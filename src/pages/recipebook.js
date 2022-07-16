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

        const thisBreakfast = makeList();

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
                        {/* <div className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}> */}
                            {/* <RecipeCard recipe={fillRecipes.BreakfastRecipes[0].Name} prep={fillRecipes.BreakfastRecipes[0].PrepTime} cook={fillRecipes.BreakfastRecipes[0].CookTime} content={fillRecipes.BreakfastRecipes[0].Description}/>
                            <RecipeCard recipe="recipe2" prep="5 min" cook="5min" content="This is recipe 2"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/> */}
                            <ul className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                                {thisBreakfast}
                            </ul>
                        {/* </div> */}
                    </div>
                    <div className="column">
                        <h1>Lunch Recipes</h1>
                        <div className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                        </div>
                    </div>
                    <div className="column">
                        <h1>Dinner Recipes</h1>
                        <div className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                        </div>
                    </div>
                    </div>
                </div>
        </StandardPage>
    );
}