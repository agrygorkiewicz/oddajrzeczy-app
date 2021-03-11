
import firebase from "firebase";


const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAdKZtc2zssTuzlYnCIF-wea6DjfitsJbc",
    authDomain: "oddajrzeczy-12538.firebaseapp.com",
    projectId: "oddajrzeczy-12538",
    storageBucket: "oddajrzeczy-12538.appspot.com",
    messagingSenderId: "455949707512",
    appId: "1:455949707512:web:1e31f60cfd4a84ad30330d"
});


const db = firebaseApp//.firestore();

export default db;