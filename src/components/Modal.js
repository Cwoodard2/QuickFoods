import React, { useState } from "react";
import { db } from "../firebase";
import {useAuth} from "../database/authContext";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import "./Modal.scss";
import "../pages/homepage.scss";

export default function Modal(props) {
    const [editable, setEditable] = useState("false");
    const [viewMode, setViewMode] = useState("view-on");
    const [editMode, setEditMode] = useState("edit-off");

    const {currentUser} = useAuth();

    if (!props.show) {
        return null;
    }

    const handleSave = () => {
        const docRef = doc(db, "Users", currentUser.uid);
        const docSnap = getDoc(docRef);
        const docData = docSnap.data();
        const recipeData = docData.BreakfastRecipes;
        for (var i = 0; i < docData.data(); i++) {
            if (recipeData[i].Name == props.title) {
                //save my data
                break;
            }
        }
    }

    const changeMode = (toMode) => {
        if (toMode === "view") {
            setEditable("false");
            setViewMode("view-on");
            setEditMode("edit-off");
        } else if (toMode === "edit") {
            setEditable("true");
            setViewMode("view-off");
            setEditMode("edit-on");
        }
    }

    if (props.attributes.length == 0) {
        var attributeArray = "None";
    } else {
        var attributeArray = props.attributes.map((attribute) => <li key={attribute} className="recipe-attribute">{attribute}</li>)
    }

    if (props.prep.length == 0) {
        var ingredientsArray = "None";
    } else {
        var ingredientsArray = props.prep.map((attribute) => <li key={attribute} className="ingredients">{attribute}</li>)
    }

    return(
        <div className="modal">
            <div className="modal-content" style={{overflowY: "auto"}}>
                <h1>{props.title}</h1>
                <div className="row" style={{padding: "2vw"}}>
                    <button onClick={() => changeMode("view")} className={viewMode}>View</button>
                    <button onClick={() => changeMode("edit")} className={editMode}>Edit</button>
                </div>
                {/* <button onClick={() => handleClick()}>Edit</button> */}
                <p id="description" style={{whiteSpace: "initial"}} contentEditable={editable}>{props.description}</p>
                <div className="modal-row modal-content-row">
                <div className="column modal-content-column">
                    <h3>Ingredients:</h3>
                    <ul className="column" style={{gap: "0.5vw"}}>
                        {ingredientsArray}
                    </ul>
                    <h3>Cooking Instructions</h3>
                    <p contentEditable={editable} id="instructions">{props.instructions}</p>
                    {/* <input id="instructions" value={props.instructions} disabled style={{width: "auto", height: "auto"}}></input> */}
                </div>
                <div className="column modal-content-column">
                    <h3>Prep Time: <div contentEditable={editable} id="prep-time">{props.prepTime}</div></h3>
                    <h3>Cook Time: <div contentEditable={editable} id="cook-time">{props.cookTime}</div></h3>
                    <h3>Attributes:</h3>
                    <div className="row" style={{gap: "0.5vw"}}>
                        {attributeArray}
                    </div>
                </div>
                </div>
                <button onClick={props.onClose} className="close-modal">Close</button>
                <button onClick={() => handleSave()} className="close-modal" style={{display: "none"}}>Save</button>
            </div>
        </div>
    );
}