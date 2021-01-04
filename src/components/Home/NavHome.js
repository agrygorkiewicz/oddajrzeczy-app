import "../../scss/NavHome.scss";
import React from "react";
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import {Link} from "react-router-dom";
import {Link} from 'react-scroll'
import {Link as Link2} from "react-router-dom";


const NavHome = () => {
    return (
        <>
            <header id="start">

                <div className="login-register">
                    <Link2 to="/login">
                        <p>Zaloguj</p>
                    </Link2>
                    <Link2 to="/register">
                        <p >Załóż konto</p>
                    </Link2>
                </div>
                <div className="navigation-home">

                    <nav>
                        <ul>
                            <li>
                            <Link to="start" smooth={true} duration={1000}> Start</Link>
                            </li>
                            <li>
                                <Link to="four-steps" smooth={true} duration={1000}> O co chodzi?</Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true} duration={1000}> O nas</Link>
                            </li>
                            <li>
                                <Link to="section-help" smooth={true} duration={1000}> Fundacja i organizacje</Link>
                            </li>
                            <li>
                                <Link to="contact" smooth={true} duration={1000}> Kontakt</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    ) };

export default NavHome;