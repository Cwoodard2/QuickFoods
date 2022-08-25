import React, {useState} from "react";
import { useAuth } from "../database/authContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import Modal from "./Modal";
import "./RecipeCardCompact.scss";

export default function RecipeCardCompact(props) {
    const [showModal, setView] = useState(false);
    const {currentUser} = useAuth();

    return(
        <div className="recipe-card-compact-main">
            <Modal title={props.recipe} description={props.content} prepTime={props.prepTime} prep={props.prep} instructions={props.instructions} cookTime={props.cook} attributes={props.attributes} onClose={() => setView(false)} show={showModal}/>
            <div className="recipe-card-compact-content">
                <h3 className="recipe-name">{props.recipe}</h3>
                <button onClick={()=>setView(true)} className="show-details-button-compact">More Details</button>
            </div>
        </div>
    );
}