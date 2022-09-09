import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../database/authContext";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import RecipeCard from "../components/RecipeCard";
import "./homepage.scss"; //For row and column
import "./recipebook.scss";
import CreateRecipeModal from "../components/CreateRecipeModal";

export default function RecipeBook(props) {
    const [showCreateModal, setCreate] = useState(false);
    const [fillRecipes, setFillRecipes] = useState({});
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const [loadRecipes, setLoadRecipes] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [finalRecipes, setFinalRecipes] = useState([]);

    const {currentUser} = useAuth();

    useEffect(() => {
        const fetchData = async () => {
          const docRef = doc(db, "Users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          const list = docSnap.data();
          setRecipes(list.Recipes);
        //   setFillRecipes(list);
        //   setBreakfast(list.BreakfastRecipes);
        //   setLunch(list.LunchRecipes);
        //   setDinner(list.DinnerRecipes);
        }

        console.log("Fetching Data");
        fetchData();
    }, []);

        function makeList() {
            const allRecipes = recipes.map((recipes) => <li className="recipe-list"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep} attributes={recipes.Attributes}/></li>);
            console.log(allRecipes)
            return allRecipes;
        };

        const filterList = (filterCriteria) => {
            console.log(filterCriteria);
            const filterRecipes = recipes.filter((recipe) => recipe.Meal == filterCriteria);
            const allRecipes = filterRecipes.map((recipes) => <li className="recipe-list"><RecipeCard meal={recipes.Meal} recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep} attributes={recipes.Attributes}/></li>);
            console.log(allRecipes);
            setFinalRecipes(allRecipes);
        }

        // function makeList2() {
        //     const lunchTime = lunch.map((recipes) => <li className="recipe-list"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep} attributes={recipes.Attributes}/></li>);
        //     return lunchTime;
        // };

        // function makeList3() {
        //     const dinnerTime = dinner.map((recipes) => <li className="recipe-list"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep} attributes={recipes.Attributes}/></li>);
        //     return dinnerTime;
        // };
        const recipeIntermediate = makeList();
        //setFinalRecipes(recipeIntermediate);
        // const thisLunch = makeList2();
        // const thisDinner = makeList3();

    return(
        <StandardPage>
            <Navigation />
            <div className="recipe-book-main">
                <div className="row" style={{gap: "2vw", alignItems: "center"}}>
                    <h1 className="title">Olivia's Recipe Book</h1>
                    <button onClick={()=>{setCreate(true); setLoadRecipes(true);}} className="add-button">&#43;</button>
                    <div className="row" style={{padding: "0.5vw", border: "solid 2px", borderRadius: "12px"}}>
                        Filter: 
                        <button onClick={() => filterList("Breakfast")}>Breakfast</button>
                        <button onClick={() => filterList("Lunch")}>Lunch</button>
                        <button onClick={() => filterList("Dinner")}>Dinner</button>
                    </div>
                </div>
                <CreateRecipeModal title={props.recipe} content={props.content} onClose={() => setCreate(false)} recipeLoad={() => setLoadRecipes(false)} show={showCreateModal}/>
                <div className="column" style={{overflowY: "auto", gap: "3vw"}}>
                    <div className="column">
                        <h1 className="subtitle">All Recipes</h1>
                            <ul className="row" style={{gap: "0vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw", justifyContent: "space-evenly", flexWrap: "wrap"}}>
                                {finalRecipes}
                            </ul>
                    </div>
                    {/* <div className="column">
                        <h1 className="subtitle">Lunch Recipes</h1>
                        <ul className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                            {thisLunch}
                        </ul>
                    </div>
                    <div className="column">
                        <h1 className="subtitle">Dinner Recipes</h1>
                        <ul className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                            {thisDinner}
                        </ul>
                    </div> */}
                </div>
            </div>
        </StandardPage>
    );
}