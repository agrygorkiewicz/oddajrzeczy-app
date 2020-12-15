import "../../scss/NavHome.scss";
import React from "react";
import {Link} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const NavHome = () => {
    return (
        <>
            <header>

                <div className="login-register">
                    {/*<Link to="/login">*/}
                        <p>Zaloguj</p>
                    {/*</Link>*/}
                    <Link to="/register">
                        <p >Załóż konto</p>
                    </Link>
                </div>
                <div className="navigation-home">

                    <nav>
                        <ul>
                            <li><AnchorLink href='#main-page'>Start</AnchorLink></li>
                            <li><AnchorLink href='#four-steps'>O co chodzi?</AnchorLink></li>
                            <li><AnchorLink href='#about'>O nas</AnchorLink></li>
                            <li><AnchorLink href='#section-help'>Fundacja i organizacje</AnchorLink></li>
                            <li><AnchorLink href="#contact">Kontakt</AnchorLink></li>

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    ) };

export default NavHome;