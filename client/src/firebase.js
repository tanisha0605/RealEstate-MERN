// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5fad4.firebaseapp.com",
  projectId: "mern-estate-5fad4",
  storageBucket: "mern-estate-5fad4.appspot.com",
  messagingSenderId: "748716866020",
  appId: "1:748716866020:web:d7f0c8d8144b7f30eaaff1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);