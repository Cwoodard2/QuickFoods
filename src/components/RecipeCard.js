import React, {useState} from "react";
import Modal from "./Modal";
import "./RecipeCard.css";

export default function RecipeCard(props) {
    const [showModal, setView] = useState(false);

    return(
        <div className="recipeCardMain">
            <Modal title={props.recipe} description={props.content} prepTime={props.prepTime} prep={props.prep} instructions={props.instructions} cookTime={props.cook} onClose={() => setView(false)} show={showModal}/>
            <h2>Space For Picture!</h2>
            <div className="recipeCardContent">
                <h3>{props.recipe}</h3>
                <div>
                    <p>Prep: {props.prepTime}<br></br><br></br>Cook: {props.cook}</p>
                </div>
            </div>
            <button onClick={()=>setView(true)}>Show Modal</button>
            {/* <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <p>{props.content}</p>
                <button onClick={()=>setView(true)}>Show Modal</button>
            </div> */}
        </div>
    );
}