import React, { useEffect, useState } from "react";
import { fillArray } from "../database/firebaseInterface";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import GroceryListCat from "../components/GroceryListCat";
import "./grocerylist.css";

export default function GroceryList() {
    var otherList;

    const [groceryList, setGrocery] = useState({});

    var dairy = ["milk", "cheese", "yogurt"];
    var vegetables = ["brocoli", "tomoato", "cumcumber"];
    var fruit = ["watermelon", "banana", "grape"];
    var snacks = ["chips", "nuts"];
    var bread = ["bread"];
    var protein = ["Beef", "chicken"];
    var random = ["pickles"];

    useEffect(() => {
        const fetchData = async () => {
          var list = await fillArray();
          setGrocery(list.Testing);
        };
        
        console.log("Fetching Data");
        fetchData();
      }, []);

    console.log(groceryList);
    // var theDairy = groceryList.Dairy;
    // console.log("theDairy " +  theDairy);

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