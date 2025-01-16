// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6BnL6e4vtgCmp9BRBvIQBrDuhEiXPRQw",
  authDomain: "producto-9c357.firebaseapp.com",
  projectId: "producto-9c357",
  storageBucket: "producto-9c357.firebasestorage.app",
  messagingSenderId: "575480263709",
  appId: "1:575480263709:web:f6f297a1f7ed5e2b5102f4",
  measurementId: "G-F06PCZT9WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// src/firebase.js


// Add this line to the existing firebase configuration
export const db = getFirestore();
