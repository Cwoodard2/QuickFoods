import React, {useState} from "react";
import Modal from "./Modal";
import "./RecipeCard.scss";

export default function RecipeCard(props) {
    const [showModal, setView] = useState(false);

    return(
        <div className="recipe-card-main">
            <Modal title={props.recipe} description={props.content} prepTime={props.prepTime} prep={props.prep} instructions={props.instructions} cookTime={props.cook} onClose={() => setView(false)} show={showModal}/>
            <h2>Space For Picture!</h2>
            <div className="recipe-card-content">
                <h3>{props.recipe}</h3>
                <div>
                    <p>Prep: {props.prepTime}<br></br><br></br>Cook: {props.cook}</p>
                </div>
            </div>
            <button onClick={()=>setView(true)} className="show-details-button">More Details</button>
        </div>
    );
}