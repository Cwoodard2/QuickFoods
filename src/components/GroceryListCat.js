import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../database/authContext";
import React, { useEffect, useState } from "react";
import { useUser } from "../database/userContext";
import { fillArray } from "../database/firebaseInterface";
import "./GroceryListCat.scss";

export default function GroceryListCat(props) {
    var category = props.whichCat;
    const [items, setValue] = useState([]);
    const {currentUser} = useAuth();
    const { data, fillUserData } = useUser();

    useEffect(() => {
        const fetchData = async () => {
          const docRef = doc(db, "Users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          const list = docSnap.data();
          console.log(data);
        switch(category) {
        case "Dairy":
            setValue(data.GroceryList.Dairy);
            break;
        case "Vegetables":
            setValue(data.GroceryList.Vegetables);
            break;
        case "Fruit":
            setValue(data.GroceryList.Fruit);
            break;
        case "Snacks":
            setValue(data.GroceryList.Snacks);
            break;
        case "Bread":
            setValue(data.GroceryList.Bread);
            break;
        case "Protein":
            setValue(data.GroceryList.Protein);
            break;
        case "Random":
            setValue(data.GroceryList.Random);
            break;
        default:
            break;
      }
        };
        
        console.log("Fetching Data");
        fetchData();
      }, []);

    async function addItem() {
        const addItemRef = doc(db, "Users", currentUser.uid);
        const newList = items.concat(document.getElementById("addBox"+category).value);
        await updateDoc(addItemRef, {
            ["GroceryList."+category]: newList
        });
        document.getElementById("addBox"+category).value = "";
        setValue(newList);
    }

    async function removeItems(id) {
        const addItemRef = doc(db, "Users", currentUser.uid);
        const newList = items.filter((item) => item != id);
        await updateDoc(addItemRef, {
           ["GroceryList"+category]: newList
        });
        setValue(newList);
    }

    var thisId = "addBox"+category;

    const categoryItems = items.map((items) => <li key={items} className="grocery-list-item"><button onClick={() => removeItems(items)} className="remove-item-button"><b>&times;</b></button>{items}</li>)

    return(
        <div>
            <div className="row" style={{gap: "2vw", alignItems: "center"}}>
                <u><h2 style={{color: "#2568FB"}} className="category-title">{category}</h2></u>
                <input id={thisId} type="text" 
                placeholder="Add an item" className="add-item-input"></input>
                <button onClick={() => addItem()} className="add-item-button">Add Item</button>
            </div>
            <ul style={{borderLeft: "solid 5px", borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px"}}>{categoryItems}</ul>
        </div>
    );
}