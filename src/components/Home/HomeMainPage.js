import "../../scss/HomeMainPage.scss";
import React from "react";
import HomeImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
// import {Link} from "react-router-dom";



const HomeMainPage = () => {
    return (
        <div className="main-page" id="main-page">
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