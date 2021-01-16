import React from "react";
import "../../scss/HomeLoggenIn.scss";
import "../../scss/FirstStep.scss";




const FirstStep = () => {
    return (

        <>

            <p>Krok 1/2</p>
            <div className="checkbox-section">
                <h3>
                    Zaznacz co chcesz oddać:
                </h3>
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
                        <input id="five" type="checkbox"/>
                        <span className="check"> </span>
                        <label htmlFor="five">inne</label>
                    </div>

                </form>
            </div>
            <button className="first-step-button">Dalej</button>
        </>
    )
}



export default FirstStep;