import "../../scss/Nav.scss";
import React from "react";
import {Link} from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll/src";
// import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {
    return (
<>
        <header>
            <div className="login-register">
                <Link to="/login">
                <p>Zaloguj</p>
                    </Link>
                <Link to="/register">
                <p >Załóż konto</p>
                    </Link>
            </div>
            <div className="navigation">
                <nav>
                    <ul>
                        <Link to="/home">
                        <li>Start</li>
                        </Link>
                        <li><a name={"/home#four-steps"} href={"/home#four-steps"}>O co chodzi?</a></li>
                        <li><a href={"/home#about"}>O nas</a></li>
                        <li><a href={"/home#section-help"}>Fundacja i organizacje</a></li>
                        <li><a href={"/home#contact"}>Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
    ) };

export default Nav;