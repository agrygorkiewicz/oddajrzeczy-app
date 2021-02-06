import React from "react";
import HomeLoggedImage from "../../assets/Form-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";

const LoggedMainPage = () => {
    return (
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
    )
}

export default LoggedMainPage;