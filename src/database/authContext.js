import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, updateDoc, doc, setDoc, DocumentSnapshot, getDoc, DocumentReference, } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    

    function login(email, password) {
        const auth = getAuth();
        console.log("here");
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log("signed in");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    async function createUser(email, password) {
        const auth = getAuth();
        console.log("here");
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log("signed in");
                // await setDoc(db, "Users", user.uid), {
                //     BreakfastRecipes: [],
                //     DinnerRecipes: [],
                //     GroceryList: {
                //         Bread: [],
                //         Dairy: [],
                //         Fruit: [],
                //         Protein: [],
                //         Random: [],
                //         Snacks: [],
                //         Vegetables: []
                //     },
                //     LunchRecipes: [],
                //     SnackRecipes: []
                // }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    useEffect(() => {
        const auth = getAuth()
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user) {
                setCurrentUser(user);
            }
        });
        
        return unsub;
    }, []);

    const value = {
        currentUser,
        login,
        createUser
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}