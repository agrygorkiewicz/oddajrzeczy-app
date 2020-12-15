// import React, { useState, useEffect } from "react";
// import Login2 from "./Login2";
// import firestore from "../firebase"
// import HomeLoggedIn from "./HomeLoggedIn";
// import 'firebase/app';
// import 'firebase/auth';
// // require('firebase/auth');
//
//
// const LoginPage2 = () => {
//     const [currentUser, setCurrentUser] = useState(null);
//
//
//     useEffect(() => {
//
//         firestore.auth().onAuthStateChanged(user => {
//             if (user) {
//                 setCurrentUser(user);
//                 localStorage.setItem("user", user.uid);
//             } else {
//                 setCurrentUser(null);
//                 localStorage.removeItem("user");
//             }
//         });
//     }, []);
//
//     return (
//       <>
//             {currentUser ? (
//                 <>
//                     <HomeLoggedIn/>
//                 </>
//             ) : (
//                 <Login2 />
//             )}
//
//       </>
//     );
// };
//
// export default LoginPage2;
