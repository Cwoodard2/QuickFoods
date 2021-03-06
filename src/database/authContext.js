import React, { useContext, useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    

    function login(email, password) {
        // const auth = getAuth();
        console.log("here");
        // setPersistence(auth, browserLocalPersistence).then(() => {
            return signInWithEmailAndPassword(auth, email, password);
            // .then((userCredential) => {
            //     const user = userCredential.users;
            //     console.log("signed in");
            // })
            // .catch((error) => {
            //     console.log("failed sign up");
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            // })
        // });
    }

    async function createUser(email, password) {
        // const auth = getAuth();
        console.log("here");
        return createUserWithEmailAndPassword(auth, email, password);
            // .then((userCredential) => {
            //     const user = userCredential.user
            //     console.log("created user");
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            // });
    }

    useEffect(() => {
        const auth = getAuth()
        const unsub = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setCurrentUser(user);
        });

        // unsub();
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