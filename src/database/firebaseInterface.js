import React from "react";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

export async function fillArray() {
    // const {currentUser} = useAuth();
    const docRef = doc(db, "Users", "Jerry");
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}