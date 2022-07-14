import React, { useState } from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import RecipeCard from "../components/RecipeCard";
import "./recipebook.css";
import CreateRecipeModal from "../components/CreateRecipeModal";

export default function RecipeBook(props) {
    const [showCreateModal, setCreate] = useState(false);

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
                        <div className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe2" prep="5 min" cook="5min" content="This is recipe 2"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                        </div>
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