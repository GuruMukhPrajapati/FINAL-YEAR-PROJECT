// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjS50FNsP6qWJ9_4iPwpMIEfcbvv9G6FI",
  authDomain: "ebharat-b132c.firebaseapp.com",
  projectId: "ebharat-b132c",
  storageBucket: "ebharat-b132c.appspot.com",
  messagingSenderId: "946662860277",
  appId: "1:946662860277:web:f0e311aee44c7dddca6cbc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}