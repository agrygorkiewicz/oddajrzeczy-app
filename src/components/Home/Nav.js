import "../../scss/Nav.scss";
import React from "react";
// import {Link} from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll/src";
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link as Link2} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header>
                <div className="login-register">
                    <Link2 to="/login">
                        <p>Zaloguj</p>
                    </Link2>
                    <Link2 to="/register">
                        <p>Załóż konto</p>
                    </Link2>
                </div>
                <div className="navigation">
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
        </>
    )
};

export default Nav;