import "../../scss/HomeMainPage.scss";
import React from "react";
import HomeImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import {Link as Link2} from "react-router-dom";
import {Link} from "react-scroll";
// import {Link} from "react-router-dom";



const HomeMainPage = () => {
    return (
        <div className="main-page" id="main-page">
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
            <div className="home-image">
                <img alt="" className="Home-Image" src={HomeImage}/>
            </div>
            <div className="main-text">
                <h1>Zacznij pomagać</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img alt="" src={Decoration}/>
                <div className="options-buttons">
                    {/*<Link to="/logout">*/}
                    <p>ODDAJ RZECZY</p>
                    {/*</Link>*/}
                    {/*<Link to={"/login"}>*/}
                    <p>ZORGANIZUJ ZBIÓRKĘ</p>
                    {/*</Link>*/}

                </div>
            </div>
        </div>
    )
};

export default HomeMainPage;