import React from "react";
import "./CreateRecipeModal.css";

export default function CreateRecipeModal(props) {

    if (!props.show) {
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="ModalContent" onClick={e => e.stopPropagation()}>
                <input placeholder="Recipe Name"></input>
                <input placeholder="Prep Time"></input>
                <input placeholder="Cook Time"></input>
                <input placeholder="Description"></input>
                <input placeholder="Prep and Ingredients"></input>
                <input placeholder="Cooking Instructions"></input>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    );
}