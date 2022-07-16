import React from "react";
import "./CreateRecipeModal.css";

export default function CreateRecipeModal(props) {

    if (!props.show) {
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="ModalContent" onClick={e => e.stopPropagation()}>
                <h2 style={{alignSelf: "flex-start", justifySelf: "flex-start", paddingLeft: "1vw"}}>Create Recipe</h2>
                <input placeholder="Recipe Name" className="input"></input>
                <input placeholder="Prep Time" className="input"></input>
                <input placeholder="Cook Time" className="input"></input>
                <input placeholder="Description" className="input"></input>
                <input placeholder="Prep and Ingredients" className="input"></input>
                <input placeholder="Cooking Instructions" className="input"></input>
                <button onClick={props.onClose}>Add Recipe</button>
            </div>
        </div>
    );
}