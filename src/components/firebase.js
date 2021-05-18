
import firebase from "firebase";


const firebaseApp = firebase.initializeApp( {
   apiKey: "AIzaSyCd1YdwOcS6s2-m-z53ctwcKaUfbuAxMDk",
    authDomain: "oddajrzeczy2.firebaseapp.com",
    projectId: "oddajrzeczy2",
    storageBucket: "oddajrzeczy2.appspot.com",
    messagingSenderId: "861303639853",
    appId: "1:861303639853:web:58994737beab31458acda4"
});


const db = firebaseApp//.firestore();

export default db;