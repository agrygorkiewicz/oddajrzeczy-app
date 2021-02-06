import React from "react";
import "../../scss/HomeLoggenIn.scss";
import "../../scss/ForthStep.scss";

const ForthStep = ({navigation}) => {

    return (
        <>
            <section className="four-parts">
                <div className="four-out-of-four">
            <p>Krok 4/4</p>   </div>
                <div className="t-text">
            <h3> Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
                </div>
           <div className="forth-step-form">
                <div className="address-box">
                    <h4>Adres odbioru:</h4>
                    <div className="address-input">
                        <label>Ulica</label>
                        <input type="text" id="street"/>
                    </div>
                    <div className="address-input">
                        <label>Miasto</label>
                        <input type="text" id="city"/>
                    </div>
                    <div className="address-input">
                        <label>Kod pocztowy</label>
                        <input type="text" id="postcode"/>
                    </div>
                    <div className="address-input">
                        <label>Numer telefonu</label>
                        <input type="text" id="number"/>
                    </div>
                </div>
                    <div className="date-box">
                        <h4>Termin odbioru:</h4>
                        <div className="date-input">
                            <label>Data</label>
                            <input type="text" id="date"/>
                        </div>
                        <div className="date-input">
                            <label>Godzina</label>
                            <input type="text" id="time"/>
                        </div>
                        <div className="date-input">
                            <label>Uwagi dla kuriera</label>
                            <textarea id="notes"/>
                        </div>



                </div>
            </div>
            <div className="fourth-step-button">
            <button onClick={() => navigation.previous()}>Wstecz</button>
            <button onClick={() => navigation.next()} >Dalej</button>
            </div>
            </section>
        </>
    )
}

export default ForthStep;