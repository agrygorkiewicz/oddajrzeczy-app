import React, { useState, useEffect } from "react";
import Login2 from "./Login2";
import db from "firebase/app";
import 'firebase/auth';
require('firebase/auth');

// import Logout from "../../components/Logout/Logout";
// import HomeLoggedIn from "../Loggedin/HomeLoggedIn";


const LoginPage2 = () => {
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        db.auth().onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user);
                localStorage.setItem("user", user.uid);
            } else {
                setCurrentUser(null);
                localStorage.removeItem("user");
            }
        });
    }, []);

    return (
      <>
            {currentUser ? (
                <>
                    <Login2/>
                </>
            ) : (
                <Login2 />
            )}

      </>
    );
};

export default LoginPage2;
