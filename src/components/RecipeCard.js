import React, {useState} from "react";
import Modal from "./Modal";
import "./RecipeCard.scss";

export default function RecipeCard(props) {
    const [showModal, setView] = useState(false);

    return(
        <div className="recipe-card-main">
            <Modal title={props.recipe} description={props.content} prepTime={props.prepTime} prep={props.prep} instructions={props.instructions} cookTime={props.cook} attributes={props.attributes} onClose={() => setView(false)} show={showModal}/>
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