// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABNBZ8_OKjFFJU16UUZMoW72FB4DG1Vfc",
  authDomain: "react-talentotech-113c6.firebaseapp.com",
  projectId: "react-talentotech-113c6",
  storageBucket: "react-talentotech-113c6.firebasestorage.app",
  messagingSenderId: "106575812361",
  appId: "1:106575812361:web:b8f35e62ad5ff0574fe5d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para cuando veamos el login
// const auth =getAuth(app)

export {db}