
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCzeANhgGkOQ15VZIRqlwZSVLxe0bRaLAE",
    authDomain: "filmbridge-b8d81.firebaseapp.com",
    projectId: "filmbridge-b8d81",
    storageBucket: "filmbridge-b8d81.appspot.com",
    messagingSenderId: "511169305782",
    appId: "1:511169305782:web:cf6cf0ad464e6fa9069a17",
    measurementId: "G-K7XM5JP6RQ"
};
  
const filmbridgeApp = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(filmbridgeApp)
const storage = getStorage(filmbridgeApp)
export { auth, filmbridgeApp, db, storage }