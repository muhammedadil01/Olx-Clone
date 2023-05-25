import firebase from "firebase";
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnLCN1B4tJL6cnmRWqbFDGPRm3MUbmvZk",
    authDomain: "olx-clone-8375a.firebaseapp.com",
    projectId: "olx-clone-8375a",
    storageBucket: "olx-clone-8375a.appspot.com",
    messagingSenderId: "868904806606",
    appId: "1:868904806606:web:74842e9b736f99fa5f089f",
    measurementId: "G-B3BG1R31LZ"
  };

 export default firebase.initializeApp(firebaseConfig)