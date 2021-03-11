import "../../scss/HomeContactForm.scss";
import React, {useState} from "react";
import BackgroundContactForm from "../../assets/Background-Contact-Form.jpg";
import Decoration from "../../assets/Decoration.svg";

import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import db from "../firebase"
// require('firebase/database')


const HomeContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [notification, setNotification] = useState(null);

    const handleSubmit = (e) => {
        let isError = false
        e.preventDefault();
        if (name.length <= 2 || name.length === 0) {
            setNameError("Imię jest za krótkie");
            isError = true;
        } else {
            setNameError(false);
        }
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email)) {
            setEmailError("Email jest nieprawidłowy");
            isError = true;
        }
        if (!message) {
            setMessageError("Wiadomość jest wymagana");
        } else if (message.length <= 2) {
            setMessageError("Wiadomość jest za krótka")

        } else if (!isError) {

            db.firestore().collection("contacts").add({
                name: name,
                email: email,
                message: message,

            })
                .then(() => {
                    setNotification("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
                })
                .catch(() => {
                    alert("Błąd");
                });
            setMessage("");
            setName("");
            setEmail("");
        }
    }


    return (
        <>
            <div className="background-contact-section">
                <img alt="" src={BackgroundContactForm}/>
            </div>
            <section className="contact">

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-title">
                        <h1>Skontaktuj się z nami</h1>
                        <img alt="" src={Decoration}/>
                        {notification &&
                        <p style={{color: "green", marginBottom: "30px", fontWeight: "bold"}}>{notification}</p>}
                    </div>
                    <div className="name-email-input">
                        <div className="form-group">
                            <label className="inputName">Wpisz swoje imię</label>
                            <input style={{
                                borderBottom: nameError ? "1px solid #ff6347" : "1px solid black",
                            }} onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-input"
                            />
                            {nameError && <p style={{color: "tomato"}}>{nameError}</p>}
                        </div>
                        <div className="form-group">
                            <label className="inputName">Wpis swój email</label>
                            <input style={{
                                borderBottom: emailError ? "1px solid #ff6347" : "1px solid black",
                            }} onChange={(e) => setEmail(e.target.value)} value={email} type="text"
                                   className="form-input"
                            />
                            {emailError && <p style={{color: "tomato"}}>{emailError}</p>}
                        </div>

                    </div>

                    <div className="form-group">
                        <label className="inputName">Wpisz swoją wiadomość</label>
                        <textarea style={{
                            borderBottom: messageError ? "1px solid #ff6347" : "1px solid black",
                        }} onChange={(e) => setMessage(e.target.value)} value={message}
                                  className="form-input"> </textarea>
                        {messageError && <p style={{color: "#ff6347"}}>{messageError}</p>}
                    </div>
                    <button className="btn btn-dark">Wyślij</button>

                   </form>
                <div className="footer">
                    <p>Copyright by CodersLab</p>
                    <div className="footer-icons">
                        <img alt="" src={Facebook}/>
                        <img alt="" src={Instagram}/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeContactForm;