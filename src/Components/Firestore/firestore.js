// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLO01jVqlY-z2S80ojFVWF-aQyaL6WqbY",
  authDomain: "portfolio-f40ec.firebaseapp.com",
  databaseURL: "https://portfolio-f40ec-default-rtdb.firebaseio.com",
  projectId: "portfolio-f40ec",
  storageBucket: "portfolio-f40ec.appspot.com",
  messagingSenderId: "956304458859",
  appId: "1:956304458859:web:a9171893c5136672099d2e",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
