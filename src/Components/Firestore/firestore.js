// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHJ2dy6i39Eor46sIBEz5Zl2eDqrfRTm8",
  authDomain: "form-25c34.firebaseapp.com",
  projectId: "form-25c34",
  storageBucket: "form-25c34.appspot.com",
  messagingSenderId: "579773028277",
  appId: "1:579773028277:web:33582b40f03f37365dabfc",
  measurementId: "G-234BH19ZMW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
