// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQD5mNQE98LGRQfntlOCP-cbjgIeI43yc",
    authDomain: "task-management-95d1e.firebaseapp.com",
    projectId: "task-management-95d1e",
    storageBucket: "task-management-95d1e.appspot.com",
    messagingSenderId: "1055464749885",
    appId: "1:1055464749885:web:e02d7286e363aa9e31a354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();

export { db, auth }