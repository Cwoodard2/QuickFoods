import React, {useState, useEffect} from "react";
import {useAuth} from "../database/authContext";
import { db } from '../firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";
import Navigation from "../components/Navigation";
import StandardPage from "../components/StandardPage";
import RecipeCard from "../components/RecipeCard";
import RecipeCardCompact from "../components/RecipeCardCompact";
import "./homepage.scss"

export default function Homepage() {
    const [mainRecipe1, setRecipe1] = useState();
    const [mainRecipe2, setRecipe2] = useState();
    const [currentDay, setCurrentDay] = useState("Monday");
    const [plannedMeals, setPlannedMeals] = useState({});
    var date = new Date();
    var currentTime = date.getHours();
    var mealSuggestions;
    var timeOfDay;
    const {currentUser} = useAuth();
    console.log(currentUser);

    if (parseInt(currentTime) >= 0 && parseInt(currentTime) <= 11){
        mealSuggestions = "Breakfast";
        timeOfDay = "Morning";
    } else if(parseInt(currentTime) >= 12 && parseInt(currentTime) <= 16) {
        mealSuggestions = "Lunch";
        timeOfDay = "Afternoon";
    } else if(currentTime >= 17 && currentTime <= 23) {
        mealSuggestions = "Dinner";
        timeOfDay = "Evening";
    }

    useEffect(() => {
        const checkForDoc = async () => {
            console.log(currentUser.uid);
            const docRef = doc(db, "Users", currentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                var data = docSnap.data();
                console.log(data);
                var monday = data.Monday;
                console.log(monday);
                console.log(monday.Breakfast[1]);
                setPlannedMeals(monday);
                switch(mealSuggestions) {
                    case "Breakfast":
                        const whichRecipe1 = 0;
                        const whichRecipe2 = 0;
                        setRecipe1(data.BreakfastRecipes[whichRecipe1]);
                        setRecipe2(data.BreakfastRecipes[whichRecipe2]);
                        break;
                    case "Lunch":
                        break;
                    case "Dinner":
                        break;
                    default:
                        break;
                }
            } else {
                console.log("creating doc");
                prompt("Welcome to QuickFoods! Since you're a new user we'd like to know your name so you can have a more personalized service! Please enter it below.");
                const res = await setDoc(doc(db, "Users", currentUser.uid), {
                    BreakfastRecipes: [],
                    DinnerRecipes: [],
                    GroceryList: {
                        Bread: [],
                        Dairy: [],
                        Fruit: [],
                        Protein: [],
                        Random: [],
                        Snacks: [],
                        Vegetables: []
                    },
                    LunchRecipes: [],
                    SnackRecipes: [],
                    Sunday: {
                        Breakfast: [false, {}],
                        Lunch: [false, {}],
                        Dinner: [false, {}]
                    },
                    Monday: {
                        Breakfast: [false, {}],
                        Lunch: [false, {}],
                        Dinner: [false, {}]
                    },
                    Tuesday: {
                        Breakfast: [false, {}],
                        Lunch: [false, {}],
                        Dinner: [false, {}]
                    },
                    Wednesday: {
                        Breakfast: [false, {}],
                        Lunch: [false, {}],
                        Dinner: [false, {}]
                    },
                    Thursday: {
                        Breakfast: [false, {}],
                        Lunch: [false, {}],
                        Dinner: [false, {}]
                    },
                    Friday: {
                        Breakfast: [false, {}],
                        Lunch: [false, {}],
                        Dinner: [false, {}]
                    },
                    Saturday: {
                        Breakfast: [false, {}],
                        Lunch: [false, {}],
                        Dinner: [false, {}]
                    }
                });
            }
        }

        checkForDoc();
    }, []);

    var planBreakfast = plannedMeals.Breakfast;
    var planLunch = plannedMeals.Lunch;
    var planDinner = plannedMeals.Dinner;
console.log(plannedMeals);
    return (
        <StandardPage>
            <Navigation />
            <div className="homepage-main">
                <div style={{width: "100vw", color: "#2568FB"}}>
                    <h1>Good {timeOfDay}, Olivia</h1>
                </div>
                <div className="row">
                    <div>
                        <div>
                            Plan for the day
                            {/* <RecipeCardCompact recipe={planBreakfast.Name} prepTime={planBreakfast.PrepTime} cook={planBreakfast.CookTime} content={planBreakfast.Description} instructions={planBreakfast.Cook} prep={planBreakfast.Prep} attributes={planBreakfast.Attributes}/> */}
                        </div>
                    </div>
                    <div className="recipe-cards">
                        <div className="column">
                            <h2 style={{color: "#FECD45"}}>{mealSuggestions} Suggestions</h2>
                            <div className="recipe-suggestions column">
                                {/* <RecipeCard recipe={mainRecipe1.Name} prepTime={mainRecipe1.PrepTime} cook={mainRecipe1.CookTime} content={mainRecipe1.Description} instructions={mainRecipe1.Cook} prep={mainRecipe1.Prep}/>
                                <RecipeCard recipe={mainRecipe2.Name} prepTime={mainRecipe2.PrepTime} cook={mainRecipe2.CookTime} content={mainRecipe2.Description} instructions={mainRecipe2.Cook} prep={mainRecipe2.Prep}/> */}
                                <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                                <RecipeCard recipe="recipe2" prep="5 min" cook="5min" content="This is recipe 2"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="column">
                        <h2>Snack Suggestions</h2>
                        <div className="recipe-suggestions column">
                            <RecipeCard recipe="recipe1" prep="0 min" cook="10min" content="This is recipe 1"/>
                            <RecipeCard recipe="recipe2" prep="5 min" cook="5min" content="This is recipe 2"/>
                        </div>
                    </div> */}
                </div>
            </div>
        </StandardPage>
    );
};