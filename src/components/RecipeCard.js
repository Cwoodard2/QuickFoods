import React, {useState} from "react";
import { useAuth } from "../database/authContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import Modal from "./Modal";
import "./RecipeCard.scss";

export default function RecipeCard(props) {
    const [showModal, setView] = useState(false);
    const {currentUser} = useAuth();

    const removeRecipe = async () => {
        var meal;
        const docRef = doc(db, "Users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data();
        switch("breakfast") {
            case "breakfast":
                meal = "BreakfastRecipes";
                break;
            case "lunch":
                break;
            case "dinner":
                break;
            default:
                break;
        }
        await updateDoc(docRef, {
            [meal]: docData.BreakfastRecipes.filter((recipe) => recipe.Name !== props.recipe)
        })
    }

    return(
        <div className="recipe-card-main">
            <Modal title={props.recipe} description={props.content} prepTime={props.prepTime} prep={props.prep} instructions={props.instructions} cookTime={props.cook} attributes={props.attributes} onClose={() => setView(false)} show={showModal}/>
            <button className="remove-recipe-button" onClick={() => removeRecipe()}>X</button>
            <h2 className="recipe-name">Space For Picture!</h2>
            <div className="recipe-card-content">
                <h3 className="recipe-name">{props.recipe}</h3>
                <div>
                    <p className="recipe-times">Prep: {props.prepTime}<br></br><br></br>Cook: {props.cook}</p>
                </div>
            </div>
            <button onClick={()=>setView(true)} className="show-details-button">More Details</button>
        </div>
    );
}