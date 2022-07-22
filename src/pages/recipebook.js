import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../database/authContext";
import { useUser } from "../database/userContext";
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

    const {currentUser} = useAuth();
    const { data, fillUserData } = useUser();

    useEffect(() => {
        const fetchData = async () => {
          const docRef = doc(db, "Users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          const list = docSnap.data();
          setFillRecipes(list);
        //   setBreakfast(list.BreakfastRecipes);
        //   setLunch(list.LunchRecipes);
        //   setDinner(list.DinnerRecipes);
        }

        console.log("Fetching Data");
        fetchData();
    }, []);

        function makeList() {
            const breakfastTime = data.BreakfastRecipes.map((recipes) => <li className="recipe-list"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep} attributes={recipes.Attributes}/></li>);
            return breakfastTime;
        };

        function makeList2() {
            const lunchTime = data.LunchRecipes.map((recipes) => <li className="recipe-list"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep} attributes={recipes.Attributes}/></li>);
            return lunchTime;
        };

        function makeList3() {
            const dinnerTime = data.DinnerRecipes.map((recipes) => <li className="recipe-list"><RecipeCard recipe={recipes.Name} prepTime={recipes.PrepTime} cook={recipes.CookTime} content={recipes.Description} instructions={recipes.Cook} prep={recipes.Prep} attributes={recipes.Attributes}/></li>);
            return dinnerTime;
        };

        const thisBreakfast = makeList();
        const thisLunch = makeList2();
        const thisDinner = makeList3();

    return(
        <StandardPage>
            <Navigation />
            <div className="recipe-book-main">
                <div className="row" style={{gap: "2vw", alignItems: "center"}}>
                    <h1 className="title">Olivia's Recipe Book</h1>
                    <button onClick={()=>setCreate(true)} className="add-button">&#43;</button>
                </div>
                <CreateRecipeModal title={props.recipe} content={props.content} onClose={() => setCreate(false)} show={showCreateModal}/>
                <div className="column" style={{overflowY: "auto", gap: "3vw"}}>
                    <div className="column">
                        <h1 className="subtitle">Breakfast Recipes</h1>
                            <ul className="row" style={{gap: "5vw", paddingLeft: "2vw", paddingRight: "2vw", paddingTop: "1vw", paddingBottom: "2vw"}}>
                                {thisBreakfast}
                            </ul>
                    </div>
                    <div className="column">
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
                    </div>
                    </div>
                </div>
        </StandardPage>
    );
}