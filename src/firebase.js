// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBmRrgiNg4xy6zkvi725gcsoJKNpHMh9l0",
  authDomain: "react-portfolio-sonu.firebaseapp.com",
  projectId: "react-portfolio-sonu",
  storageBucket: "react-portfolio-sonu.appspot.com",
  messagingSenderId: "672209558835",
  appId: "1:672209558835:web:5b3cb8eb05966ac0aff246"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();