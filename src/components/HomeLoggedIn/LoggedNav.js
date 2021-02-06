import React from "react";
import {Link as Link2} from "react-router-dom";
import db from "../firebase";
import  "../../scss/HomeLoggenIn.scss";

const LoggedNav = () => {

    const handleSignOut = () => {
        db.auth().signOut()
    }

    return (
        <header>
            <div className="logged-in">
                <li>Oddaj rzeczy</li>
                <li onClick={handleSignOut}>Wyloguj</li>
            </div>
            <div className="navigation-logged-in">
                <nav>
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <Link2 to="/">
                                Start
                            </Link2>
                        </li>
                        <li className="nav-li">
                            <Link2 to="/" className="header-nav-link"> O co chodzi?</Link2>
                        </li>
                        <li className="nav-li">
                            <Link2 to="/" className="header-nav-link"> O nas</Link2>
                        </li>
                        <li className="nav-li">
                            <Link2 to="/" className="header-nav-link"> Fundacja i organizacje</Link2>
                        </li>
                        <li className="nav-li">
                            <Link2 to="/" className="header-nav-link"> Kontakt</Link2>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default LoggedNav;