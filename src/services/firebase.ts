import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMFYOicIJbDS6IBac0fHRjZJRVwSLdRAk",
  authDomain: "loveintimesofallergiesv2.firebaseapp.com",
  projectId: "loveintimesofallergiesv2",
  storageBucket: "loveintimesofallergiesv2.appspot.com",
  messagingSenderId: "292603446720",
  appId: "1:292603446720:web:42461c75e4b0a2d8ccf425"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase