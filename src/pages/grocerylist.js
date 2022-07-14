import React from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import GroceryListCat from "../components/GroceryListCat";
import "./grocerylist.css";

export default function GroceryList() {
    var dairy = ["milk", "cheese", "yogurt"];
    var vegetables = ["brocoli", "tomoato", "cumcumber"];
    var fruit = ["watermelon", "banana", "grape"];
    var snacks = ["chips", "nuts"];
    var bread = ["bread"];
    var protein = ["Beef", "chicken"];
    var random = ["pickles"];

    return(
        <StandardPage>
            <Navigation />
            <div>
                <h1>Olivia's Grocery List</h1>
                <div className="groceryListMain">
                    <div className="groceryList">
                        <GroceryListCat whichCat="Dairy" catItems={dairy}/>
                        <GroceryListCat whichCat="Vegetables" catItems={vegetables}/>
                        <GroceryListCat whichCat="Fruit" catItems={fruit}/>
                        <GroceryListCat whichCat="Snacks" catItems={snacks}/>
                        <GroceryListCat whichCat="Bread" catItems={bread}/>
                        <GroceryListCat whichCat="Protein" catItems={protein}/>
                        <GroceryListCat whichCat="Random" catItems={random}/>
                    </div>
                </div>
            </div>
        </StandardPage>
    );
}