import React from "react";
import "./Modal.scss";
import "../pages/homepage.scss";

export default function Modal(props) {

    if (!props.show) {
        return null;
    }

    const handleClose = () => {
        // var instructions = document.getElementById("instructions");
        // instructions.disabled = false;
        // return 0;
        
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
                {/* <button onClick={() => handleClick()}>Edit</button> */}
                <p style={{whiteSpace: "initial"}} contentEditable="true">{props.description}</p>
                <div className="modal-row modal-content-row">
                <div className="column modal-content-column">
                    <h3>Ingredients:</h3>
                    <ul className="column" style={{gap: "0.5vw"}}>
                        {ingredientsArray}
                    </ul>
                    <h3>Cooking Instructions</h3>
                    <p contentEditable="true">{props.instructions}</p>
                    {/* <input id="instructions" value={props.instructions} disabled style={{width: "auto", height: "auto"}}></input> */}
                </div>
                <div className="column modal-content-column">
                    <h3>Prep Time: <div contentEditable="true">{props.prepTime}</div></h3>
                    <h3>Cook Time: <div contentEditable="true">{props.cookTime}</div></h3>
                    <h3>Attributes:</h3>
                    <div className="row" style={{gap: "0.5vw"}}>
                        {attributeArray}
                    </div>
                </div>
                </div>
                <button onClick={props.onClose} className="close-modal">Close</button>
            </div>
        </div>
    );
}