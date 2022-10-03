import React, {useEffect, useState} from "react";
import { db } from '../firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAuth } from "../database/authContext";

export default function GroceryListCalendar(props) {
    const [grocerylist, setGroceryList] = useState([]);
    const {currentUser} = useAuth();

    useEffect(() => {
        const fetchData = async () => {
          let placeholder =  [];
          const docRef = doc(db, "Users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          const list = docSnap.data();
        //   placeholder = list[Monday][Breakfast];
          setGroceryList(list[props.day][props.meal][1].Prep);
        }
        fetchData();
    }, []);

    return (
        <div className="grocery-list">
            <h2>Breakfast</h2>
            {grocerylist.map(attribute => <li><button>X</button>{attribute}</li>)}
        </div>
    )
}