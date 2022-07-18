import React, { useEffect, useState } from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import GroceryListCat from "../components/GroceryListCat";
import "./grocerylist.scss";

export default function GroceryList() {

    return(
        <StandardPage>
            <Navigation />
            <div>
                <h1>Olivia's Grocery List</h1>
                <div className="groceryListMain">
                    <div className="groceryList">
                        <GroceryListCat whichCat="Dairy" />
                        <GroceryListCat whichCat="Vegetables" />
                        <GroceryListCat whichCat="Fruit" />
                        <GroceryListCat whichCat="Snacks" />
                        <GroceryListCat whichCat="Bread" />
                        <GroceryListCat whichCat="Protein" />
                        <GroceryListCat whichCat="Random" />
                    </div>
                </div>
            </div>
        </StandardPage>
    );
}