import React, { useEffect, useState } from "react";

export default function GroceryListCat(props) {
    var category = props.whichCat;
    var catItems = props.catItems;

    const [items, setValue] = useState(props.catItems);

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