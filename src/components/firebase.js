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


// import firebase from "firebase";
//
// const firebaseApp = firebase.initializeApp( {
//     apiKey: "AIzaSyB239bTa9Or2VIQZtMW9z3RE5Rk4wwRBiY",
//     authDomain: "test-79af3.firebaseapp.com",
//     databaseURL: "https://test-79af3.firebaseio.com",
//     projectId: "test-79af3",
//     storageBucket: "test-79af3.appspot.com",
//     messagingSenderId: "790398351253",
//     appId: "1:790398351253:web:a3f9197d244af5c817e89c"
// })
//
// const firestore = firebaseApp//.firestore();
//
// export default firestore;
