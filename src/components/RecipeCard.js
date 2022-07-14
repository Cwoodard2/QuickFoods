import React, {useState} from "react";
import Modal from "./Modal";
import "./RecipeCard.css";

export default function RecipeCard(props) {
    const [showModal, setView] = useState(false);

    return(
        <div className="recipeCardMain">
            <Modal title={props.recipe} content={props.content} onClose={() => setView(false)} show={showModal}/>
            <h1>Space For Picture!</h1>
            <div className="recipeCardContent">
                <h3>{props.recipe}</h3>
                <div>
                    <p>Prep: {props.prep}<br></br><br></br>Cook: {props.cook}</p>
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