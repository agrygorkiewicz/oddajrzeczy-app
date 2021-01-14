// import firebase from "firebase";
// import 'firebase/firestore';
//
// const firebaseApp = firebase.initializeApp( {
//     apiKey: "AIzaSyAGnPCRIRA4970Msp14nzswItVT79LkzZc",
//     authDomain: "project-1003048821196640489.firebaseapp.com",
//     projectId: "project-1003048821196640489",
//     storageBucket: "project-1003048821196640489.appspot.com",
//     messagingSenderId: "319940011299",
//     appId: "1:319940011299:web:144a183b5ff6b32d881896"
// });
//
//
// export const {db} = firebaseApp.firestore();

 // default db;


// import firebase from "firebase";
//
// var firebaseConfig = {
//     apiKey: "AIzaSyAGnPCRIRA4970Msp14nzswItVT79LkzZc",
//     authDomain: "project-1003048821196640489.firebaseapp.com",
//     projectId: "project-1003048821196640489",
//     storageBucket: "project-1003048821196640489.appspot.com",
//     messagingSenderId: "319940011299",
//     appId: "1:319940011299:web:144a183b5ff6b32d881896"
// };
//
// const db =  firebase.initializeApp(firebaseConfig);
//
// export default db;

import firebase from "firebase";


const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAGnPCRIRA4970Msp14nzswItVT79LkzZc",
    authDomain: "project-1003048821196640489.firebaseapp.com",
    projectId: "project-1003048821196640489",
    storageBucket: "project-1003048821196640489.appspot.com",
    messagingSenderId: "319940011299",
    appId: "1:319940011299:web:144a183b5ff6b32d881896"
});


const db = firebaseApp//.firestore();

export default db;