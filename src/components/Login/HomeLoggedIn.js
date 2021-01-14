import React from "react";
import db from "../firebase"
// import {Link} from "react-router-dom";
import HomeLoggedImage from "../../assets/Form-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import HomeContactForm from "../Home/HomeContactForm";
import  "../../scss/HomeLoggenIn.scss";
import {Link as Link2} from "react-router-dom";
// import ForthStep from "./ForthStep";
// import Logout from "../Logout/Logout";
// import Summary from "./Summary";
// import FirstStep from "./FirstStep";
// import Logout from "../../components/Logout/Logout";


const HomeLoggedIn = () => {

    const handleSignOut = () => {
        db.auth().signOut()

    }

    return (

        <>

            <header>
                <div className="logged-in">
                    <li>Oddaj rzeczy</li>

                    <li onClick={handleSignOut}>Wyloguj</li>

                </div>
                <div className="navigation-logged-in">
                    <nav>
                        <ul>
                            <li>
                                <Link2 to="/">
                                    Start
                                </Link2>
                            </li>
                            <li>
                                <Link2 to="/" className="header-nav-link"> O co chodzi?</Link2>
                            </li>
                            <li>
                                <Link2 to="/" className="header-nav-link"> O nas</Link2>
                            </li>
                            <li>
                                <Link2 to="/" className="header-nav-link"> Fundacja i organizacje</Link2>
                            </li>
                            <li>
                                <Link2 to="/" className="header-nav-link"> Kontakt</Link2>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>

            <section className="logged-main-page">
                <div className="home-cardigan-image">
                    <img alt="" className="Home-Logged-Image" src={HomeLoggedImage}/>
                </div>
                <div className="logged-main-text">
                    <h1>Zacznij pomagać</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img alt="" src={Decoration}/>
                    <div className="main-options four-squares">

                        <div className="square">
                            <div className="square-border">
                                <div className="square-text">
                                    <p>1</p>
                                    <p>Wybierz rzeczy</p>
                                </div>
                            </div>
                        </div>

                        <div className="square">
                            <div className="square-border">
                                <div className="square-text">
                                    <p>2</p>
                                    <p>Spakuj je w worki</p>
                                </div>
                            </div>
                        </div>

                        <div className="square">
                            <div className="square-border">
                                <div className="square-text">
                                    <p>3</p>
                                    <p>Wybierz fundację</p>
                                </div>
                            </div>
                        </div>

                        <div className="square">
                            <div className="square-border">
                                <div className="square-text">
                                    <p>4</p>
                                    <p>Zamów kuriera</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="important-section">
                <div className="important-text">
                    <h3> Ważne!</h3>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                        przekazać.</p>
                </div>
            </section>
            <section className="four-parts">
                {/*<FirstStep/>*/}

            </section>
            <HomeContactForm/>

        </>
    )
}

export default HomeLoggedIn;