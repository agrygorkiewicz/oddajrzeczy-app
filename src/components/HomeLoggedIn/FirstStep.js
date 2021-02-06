import React from "react";
import "../../scss/HomeLoggenIn.scss";
import "../../scss/FirstStep.scss";
// import Button from "@material-ui/core/Button";


const FirstStep = ({navigation}) => {
    return (

        <>
            <section className="four-parts">
                <div className="one-out-of-four">
                    <p>Krok 1/4</p>
                </div>
                <div className="checkbox-section">
                    <div className="first-title">
                        <h3>
                            Zaznacz co chcesz oddać:
                        </h3>
                    </div>
                    <form>
                        <div className="box">
                            <input id="one" type="checkbox"/>
                            <span className="check"> </span>
                            <label htmlFor="one">ubrania, które nadają się do ponownego użycia</label>
                        </div>
                        <div className="box">
                            <input id="two" type="checkbox"/>
                            <span className="check"> </span>
                            <label htmlFor="two">ubrania, do wyrzucenia</label>
                        </div>
                        <div className="box">
                            <input id="three" type="checkbox"/>
                            <span className="check"> </span>
                            <label htmlFor="three">zabawki</label>
                        </div>
                        <div className="box">
                            <input id="four" type="checkbox"/>
                            <span className="check"> </span>
                            <label htmlFor="four">książki</label>
                        </div>
                        <div className="box">
                            <input id="five" placeholder="inne" type="checkbox"/>
                            <span className="check"> </span>
                            <label htmlFor="five">inne</label>
                        </div>

                    </form>
                </div>
                <button className="first-step-button" onClick={() => navigation.next()}>Dalej</button>
            </section>
        </>
    )
}


export default FirstStep;