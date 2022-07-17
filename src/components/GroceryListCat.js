import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";
import { fillArray } from "../database/firebaseInterface";

export default function GroceryListCat(props) {
    var category = props.whichCat;
    const [items, setValue] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          var list = await fillArray();
        switch(category) {
        case "Dairy":
            setValue(list.GroceryList.Dairy);
            break;
        case "Vegetables":
            setValue(list.GroceryList.Vegetables);
            break;
        case "Fruit":
            setValue(list.GroceryList.Fruit);
            break;
        case "Snacks":
            setValue(list.GroceryList.Snacks);
            break;
        case "Bread":
            setValue(list.GroceryList.Bread);
            break;
        case "Protein":
            setValue(list.GroceryList.Protein);
            break;
        case "Random":
            setValue(list.GroceryList.Random);
            break;
        default:
            break;
      }
        };
        
        console.log("Fetching Data");
        fetchData();
      }, []);

      console.log(items);

    async function addItem() {
        const addItemRef = doc(db, "Users", "Jerry");
        const newList = items.concat(document.getElementById("addBox"+category).value);
        await updateDoc(addItemRef, {
            ["GroceryList."+category]: newList
        });
        setValue(newList);
    }

    async function removeItems(id) {
        const addItemRef = doc(db, "Users", "Jerry");
        const newList = items.filter((item) => item != id);
        await updateDoc(addItemRef, {
           ["GroceryList"+category]: newList
        });
        setValue(newList);
    }

    var thisId = "addBox"+category;

    const categoryItems = items.map((items) => <li key={items}>{items}<button onClick={() => removeItems(items)}><b>&times;</b></button></li>)

    return(
        <div>
            <h2>{category}<input id={thisId} type="text" 
            placeholder="Add an item"></input><button onClick={() => addItem()}>Add Item</button></h2>
            <ul>{categoryItems}</ul>
        </div>
    );
}