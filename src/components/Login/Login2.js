import React, {useReducer, useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/Login.scss";
import {Link} from "react-router-dom";
// import HomeLoggedIn from "../../components/Loggedin/HomeLoggedIn";
import Nav from "../../components/Home/Nav";
// import {firebase} from "../firebase.js"
import {firestore} from "../firebase.js"
import 'firebase/app';
// import db from "firebase/app";
import 'firebase/auth';
require('firebase/auth');


const Login2 = () => {
    const [error, setError] = useState([]);

    const validate = () => {
        if (!email) {
            return "Email jest wymagany";
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email)) {
            return "Podany email jest nieprawidłowy"
        }

        if  (!password) {
            return "Hasło jest wymagane";
        } else if (password.length < 5){
            return "Podane hasło jest za krótkie";
        }
        return null
    }
    // const clearInputs = () => {
    //     email('');
    //     password('');
    // }


    const [inputsContent, setInputsContent] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: "",
            password: ""
        }
    );
    const { email, password } = inputsContent;

    const handleInputChange = e => {
        setInputsContent({
            [e.target.name]: e.target.value
        });
    };

    const handleSignIn = e => {
        e.preventDefault();
        const errorMsg = validate();
        if (errorMsg) {
            setError(errorMsg)
            console.log("błąd");
            return
        }
        firestore.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(() =>
                alert(`Nieprawidłowy email lub hasło`)
            );
    };


    return (
        <>
            <Nav/>
            <section className="login-section">
                <div className="login-box">
                    <h2>Zaloguj się</h2>
                    <img alt="" src={Decoration}/>
                    {error && <p style={{color: "tomato", fontSize:"18px", padding:"10px"}}>{error}</p>}
                    <div className="login-form">
                        <div className="section-inputs">
                            <div className="login-input">
                                <label htmlFor="email-input">Email</label>
                                <input
                                    id="email-input"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleInputChange}
                                    value={email}/>

                            </div>
                            <div className="login-input">
                                <label htmlFor="password-input" className="inputName">Hasło</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password-input"
                                    required
                                    onChange={handleInputChange}
                                    value={password}/>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="login-button">


                    <button
                        type="submit"
                        name="submit"
                        value="1"
                        onClick={handleSignIn}
                    >
                        zaloguj się
                    </button>
                    <Link to="/register">
                        <button>
                            załóż konto
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Login2;
