import React from "react";
import "./Modal.scss";
import "../pages/homepage.scss";

export default function Modal(props) {

    if (!props.show) {
        return null;
    }

    const attributeArray = props.attributes.map((attribute) => <li key={attribute} className="recipe-attribute">{attribute}</li>)
    const ingredientsArray = props.prep.map((attribute) => <li key={attribute} className="ingredients">{attribute}</li>)

    return(
        <div className="modal">
            <div className="modal-content" style={{overflowY: "auto"}}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="row modal-content-row">
                <div className="column modal-content-column">
                    <h3>Ingredients:</h3>
                    <ul className="column" style={{gap: "0.5vw"}}>
                        {ingredientsArray}
                    </ul>
                    <h3>Cooking Instructions</h3>
                    <p>{props.instructions}</p>
                </div>
                <div className="column modal-content-column">
                    <h3>Prep Time: {props.prepTime}</h3>
                    <h3>Cook Time: {props.cookTime}</h3>
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