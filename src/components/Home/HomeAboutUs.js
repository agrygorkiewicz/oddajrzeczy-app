import "../../scss/HomeAboutUs.scss";
import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import People from "../../assets/People.jpg";

const HomeAboutUs = () => {
    return (
        <section className="about-us" id={"about"}>
            <div className="background-color-grey" >
                <div className="about-us-text">
                    <h1>O nas</h1>
                    <img alt="" src={Decoration}/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya
                        nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img className="signature-image" alt="" src={Signature}/>
                </div>
            </div>
            <div className="about-us-picture">
                <img alt="" src={People}/>
            </div>
        </section>
    )};

export default HomeAboutUs;