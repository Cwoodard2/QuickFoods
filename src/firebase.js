import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKNnkXSShrtjT_0-LPVtuu_YYfywVZn1U",
    authDomain: "quickfoods-b5838.firebaseapp.com",
    projectId: "quickfoods-b5838",
    storageBucket: "quickfoods-b5838.appspot.com",
    messagingSenderId: "362103569394",
    appId: "1:362103569394:web:ecee3ae25cdc841a6fc96b",
    measurementId: "G-TVNCPTZ9L8"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);