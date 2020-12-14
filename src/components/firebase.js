import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyB239bTa9Or2VIQZtMW9z3RE5Rk4wwRBiY",
    authDomain: "test-79af3.firebaseapp.com",
    databaseURL: "https://test-79af3.firebaseio.com",
    projectId: "test-79af3",
    storageBucket: "test-79af3.appspot.com",
    messagingSenderId: "790398351253",
    appId: "1:790398351253:web:a3f9197d244af5c817e89c"
})

const {db} = firebaseApp//.firestore();

export {db};
