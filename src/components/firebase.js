import firebase from "firebase";
import fb from "firebase/app"

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyC2acakoD1nd2HjEkG64Sa2ECXGC_sVIZk",
    authDomain: "oddajrzeczy-app-842e5.firebaseapp.com",
    projectId: "oddajrzeczy-app-842e5",
    storageBucket: "oddajrzeczy-app-842e5.appspot.com",
    messagingSenderId: "49501532307",
    appId: "1:49501532307:web:fb6a6a05356eba9d7a1d66"
})

// const db = firebaseApp//firestore();


const firestore = !fb.apps.length ? fb.initializeApp(firebaseApp) : fb.app()

export {firestore};
