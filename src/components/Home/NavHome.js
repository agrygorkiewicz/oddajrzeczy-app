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
                    {/*<Link to="/register">*/}
                        <p >Załóż konto</p>
                    {/*</Link>*/}
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


                            {/*<li><AnchorLink href='#about'>O nas</AnchorLink></li>*/}
                            {/*<li><AnchorLink href='#section-help'>Fundacja i organizacje</AnchorLink></li>*/}
                            {/*<li><AnchorLink href="#contact">Kontakt</AnchorLink></li>*/}

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    ) };

export default NavHome;