import React from "react";
import { db } from "../firebase";
import { useAuth } from "../database/authContext";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export async function fillArray() {
    // const {currentUser} = useAuth();
    const docRef = doc(db, "Users", "Jerry");
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}