import React, { useEffect, useState } from "react";
import StandardPage from "../components/StandardPage";
import Navigation from "../components/Navigation";
import GroceryListCat from "../components/GroceryListCat";
import GroceryListCalendar from "../components/GroceryListCalendar";
import "./grocerylist.scss";

export default function GroceryList() {

    return(
        <StandardPage>
            <Navigation />
            <div>
                <h1>Olivia's Grocery List</h1>
                <div className="row">
                <div className="grocery-list-main">
                    <div className="grocery-list-main">
                        <div className="grocery-list">
                            <GroceryListCat whichCat="Dairy" />
                        </div>
                        <div className="grocery-list">
                            <GroceryListCat whichCat="Vegetables" />
                        </div>
                        <div className="grocery-list">
                            <GroceryListCat whichCat="Fruit" />
                        </div>
                        <div className="grocery-list">
                            <GroceryListCat whichCat="Snacks" />
                        </div>
                        <div className="grocery-list">
                            <GroceryListCat whichCat="Bread" />
                        </div>
                        <div className="grocery-list">
                            <GroceryListCat whichCat="Protein" />
                        </div>
                        <div className="grocery-list">
                            <GroceryListCat whichCat="Random" />
                        </div>
                    </div>
                </div>
                <div className="calendar-grocery-list">
                    <GroceryListCalendar day="Monday" meal="Dinner"/>
                </div>
                </div>
            </div>
        </StandardPage>
    );
}