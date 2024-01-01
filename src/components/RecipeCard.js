import React, {useState} from "react";
import { useAuth } from "../database/authContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import Modal from "./Modal";
import "./RecipeCard.scss";

export default function RecipeCard(props) {
    const [showModal, setView] = useState(false);
    const {currentUser} = useAuth();

    if (props.attributes.length == 0) {
        var attributeArray = "None";
    } else {
        var attributeArray = props.attributes.map((attribute) => <li key={attribute} className="recipe-attribute">{attribute}</li>)
    }

    const removeRecipe = async () => {
        var meal;
        const docRef = doc(db, "Users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data();
        await updateDoc(docRef, {
            Recipes: docData.Recipes.filter((recipe) => recipe.Name !== props.recipe)
        })
    }

    return(
        <div className="recipe-card-main">
            <Modal title={props.recipe} description={props.content} prepTime={props.prepTime} prep={props.prep} instructions={props.instructions} cookTime={props.cook} attributes={props.attributes} onClose={() => setView(false)} show={showModal}/>
            <button className="remove-recipe-button" onClick={() => removeRecipe()}>X</button>
            {/* <h2 className="recipe-name">Space For Picture!</h2> */}
            <img src="https://th.bing.com/th/id/R.f77fc21b9015cf3b864ed7e0cdcc5e5f?rik=sI3mhsbW6cpRcQ&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2ftoast%2ftoast-03.jpg&ehk=mK71yjIHffDl2BcbNd7G7u6XSf6F4XDKcjIzXeUkUkQ%3d&risl=&pid=ImgRaw&r=0" className="food-image"/>
            <div className="recipe-card-content">
                <div>
                    <h3 className="recipe-name">{props.recipe}</h3>
                    {/* style={{border: "solid black 2px", borderRadius: "6px", padding: "0.25vw", borderColor: "yellow", backgroundColor: "beige", width: "8vw"}} */}
                    {/* <ul>{attributeArray}</ul> */}
                </div>
                <div>
                    <p className="recipe-times">Prep: {props.prepTime}<br></br><br></br>Cook: {props.cook}</p>
                </div>
            </div>
            <button onClick={()=>setView(true)} className="show-details-button">More Details</button>
        </div>
    );
}