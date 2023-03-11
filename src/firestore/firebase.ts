// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMFYOicIJbDS6IBac0fHRjZJRVwSLdRAk",
  authDomain: "loveintimesofallergiesv2.firebaseapp.com",
  projectId: "loveintimesofallergiesv2",
  storageBucket: "loveintimesofallergiesv2.appspot.com",
  messagingSenderId: "292603446720",
  appId: "1:292603446720:web:42461c75e4b0a2d8ccf425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();