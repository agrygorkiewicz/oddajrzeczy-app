import React, { useState, useEffect } from "react";
import Login2 from "./Login2";

import HomeLoggedIn from "../HomeLoggedIn/HomeLoggedIn";
import db from "../firebase"


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
                    <HomeLoggedIn/>
                </>
            ) : (
                <Login2 />
            )}

      </>
    );
};

export default LoginPage2;
