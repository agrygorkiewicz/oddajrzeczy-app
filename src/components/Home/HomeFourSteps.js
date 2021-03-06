import "../../scss/HomeFourSteps.scss";
import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";
import {Link} from "react-router-dom";

const HomeFourSteps = () => {
    return (
        <section className="section-steps" >
            <div className="section-steps-title" id="four-steps">
                <h1>Wystarczą 4 proste kroki</h1>
                <img alt="" src={Decoration}/>
            </div>
            <div className="background-grey">
                <div className="four-steps">
                    <div className="step">
                        <img alt="" src={Icon1}/>
                        <h2>Wybierz rzeczy</h2>
                        <hr/>
                        <p>ubrania, zabawki, <br/>sprzęt i inne</p>
                    </div>
                    <div className="step">
                        <img alt="" src={Icon2}/>
                        <h2>Spakuj je</h2>
                        <hr/>
                        <p>skorzystaj z <br/> worków na śmieci</p>
                    </div>
                    <div className="step">
                        <img alt="" src={Icon3}/>
                        <h2>Zdecyduj komu <br/> chcesz pomóc</h2>
                        <hr/>
                        <p>wybierz zaufane <br/> miejsce</p>
                    </div>
                    <div className="step">
                        <img alt="" src={Icon4}/>
                        <h2>Zamów kuriera</h2>
                        <hr/>
                        <p>kurier przyjedzie <br/> w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className="button-give">
                <Link to="/login">
                <p>ODDAJ <br/> RZECZY</p>
                </Link>
            </div>
        </section>
    ) };

export default HomeFourSteps;
