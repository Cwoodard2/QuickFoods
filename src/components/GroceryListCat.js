import React, { useEffect, useState } from "react";
import { fillArray } from "../database/firebaseInterface";

export default function GroceryListCat(props) {
    var category = props.whichCat;
    var catItems = props.catItems;
    // console.log(props.catItems);
    const [items, setValue] = useState([]);

    // if (category === "Dairy") {
    //     setValue(catItems.Dairy);
    // }
    // const [items, setValue] = useState(props.catItems);

    useEffect(() => {
        const fetchData = async () => {
          var list = await fillArray();
          setValue(list.GroceryList.Dairy);
        };
        
        console.log("Fetching Data");
        fetchData();
      }, []);

      console.log(items);

    //   switch(category) {
    //     case "Dairy":
    //         setValue(items.Dairy);
    //         break;
    //     case "Vegetables":
    //         setValue(items.Vegetables);
    //         break;
    //     case "Fruit":
    //         setValue(items.Fruit);
    //         break;
    //     case "Snacks":
    //         setValue(items.Snacks);
    //         break;
    //     case "Bread":
    //         setValue(items.Bread);
    //         break;
    //     case "Protein":
    //         setValue(items.Protein);
    //         break;
    //     case "Random":
    //         setValue(items.Random);
    //         break;
    //     default:
    //         break;
    //   }

    function addItem() {
        const newList = items.concat(document.getElementById("addBox").value);
        setValue(newList);
    }

    function removeItems(id) {
        const newList = items.filter((item) => item != id);
        setValue(newList);
    }

    const categoryItems = items.map((items) => <li key={items}>{items}<button onClick={() => removeItems(items)}><b>&times;</b></button></li>)

    return(
        <div>
            <h2>{category}</h2>
            <ul>{categoryItems}<li><input id="addBox" type="text" 
            placeholder="Add an item"></input><button onClick={() => addItem()}>Add Item</button></li></ul>
        </div>
    );
}