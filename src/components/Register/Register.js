import "../../scss/Register.scss";
import React, {useReducer, useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import Nav from "../../components/Home/Nav";
import {Link} from "react-router-dom";
import db from "firebase/app"

const Register = () => {
    const [error, setError] = useState([]);

    const [inputsContent, setInputsContent] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            email: "",
            password: "",
            passwordRep: ""
        }
    );

    const {email, password, passwordRep} = inputsContent;

// const email = "abc@gmail.com"
//      email = ""
//
//
//     const clearInputs = () => {
//         setEmail("");
//         password("");
//         passwordRep("")
//     }
//



    const validate = () => {
        if (!email) {
            return "Email jest wymagany";
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email)) {
            return "Email jest niepoprawny"
        }

        if  (!password) {
            return "Hasło jest wymagane";
        } else if (password.length < 5){
            return "Hasło jest za krótkie";
        }
        if (!passwordRep) {
            return "Powtórz hasło";
        } else if (passwordRep.length < 5) {
            return "Hasło jest za krótkie"
        }

        if (password !== passwordRep) {
            return "Hasła nie są identyczne"
        }
        return null
    }





    const handleInputChange = e => {
        setInputsContent({
            [e.target.name]: e.target.value
        });
    };


    const handleSignUp = e => {
        e.preventDefault();
        const errorMsg = validate();
        if (errorMsg) {
            setError(errorMsg)
            console.log("błąd");
            return
        }
        db.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error =>
                alert(`Konto z tym adresem już istnieje, zaloguj się lub użyj innego adresu email, ${error}`)
            );

        alert("Konto zostało założone pomyślnie");

    };

    return (
        <>
        <Nav/>
        <section className="register-section">
            <div className="registration-box">
                <h2>Załóż konto</h2>
                {error && <p style={{color: "tomato", fontSize:"18px", padding:"10px"}}>{error}</p>}
                <img alt="" src={Decoration}/>
                <div className="registration-form">
                    <div className="register-section-inputs">
                        <div className="register-input">
                            <label htmlFor="email-input">Email</label>
                            <input placeholder="Email"
                                   id="email-input"
                                   type="email"
                                   name="email"
                                   required
                                   onChange={handleInputChange}
                                   value={email}/>

                        </div>

                        <div className="register-input">
                            <label htmlFor="password-input" className="inputName">Hasło</label>
                            <input placeholder="********"
                                   type="password"
                                   name="password"
                                   id="password-input"
                                   required
                                   onChange={handleInputChange}
                                   value={password}/>
                        </div>
                        <div className="register-input">
                            <label htmlFor="password-input" className="inputName">Powtórz hasło</label>
                            <input placeholder="********"
                                   type="password"
                                   name="passwordRep"
                                   id="passwordRep"
                                   required
                                   onChange={handleInputChange}
                                   value={passwordRep}/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="register-button">
                <Link to={"/login"}>
                    <button>Zaloguj się</button>
                </Link>
                <button type="submit"
                        name="submit"
                        value="1"
                        onClick={handleSignUp}>Załóż konto
                </button>

            </div>
        </section>
            </>

    )
};

export default Register;