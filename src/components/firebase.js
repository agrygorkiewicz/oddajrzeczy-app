// import firebase from "firebase";
// import fb from "firebase/app"
//
// const firebaseApp = firebase.initializeApp( {
//     apiKey: "AIzaSyC2acakoD1nd2HjEkG64Sa2ECXGC_sVIZk",
//     authDomain: "oddajrzeczy-app-842e5.firebaseapp.com",
//     projectId: "oddajrzeczy-app-842e5",
//     storageBucket: "oddajrzeczy-app-842e5.appspot.com",
//     messagingSenderId: "49501532307",
//     appId: "1:49501532307:web:fb6a6a05356eba9d7a1d66"
// })
//
// // const db = firebaseApp//firestore();
//
//
// const firestore = !fb.apps.length ? fb.initializeApp(firebaseApp) : fb.app()
//
// export {firestore};


import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDgru-lgPinEiZanu47ScG_uVEqu_LGGTk",
    authDomain: "nowy-41dd1.firebaseapp.com",
    projectId: "nowy-41dd1",
    storageBucket: "nowy-41dd1.appspot.com",
    messagingSenderId: "265517409910",
    appId: "1:265517409910:web:31b27cbe17dbc5e10c6157"
})


// noinspection UnnecessaryLocalVariableJS
const firestore = firebaseApp//.firestore();


// const firestore = firebaseApp//.firestore();
export default firestore;

