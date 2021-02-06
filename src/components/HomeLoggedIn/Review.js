import React from "react";
import "../../scss/HomeLoggenIn.scss";
import "../../scss/Review.scss";
import Icon1 from "../../assets/Icon-1.svg";
import Icon4 from "../../assets/Icon-4.svg";


const Review = ({navigation}) => {

    return (
        <>
            <section className="four-parts">
            <div className="summary-text">
                <h2>Podsumowanie Twojej darowizny</h2>
                <h3>Oddajesz:</h3>
                <div className="summary-items">
                    <img alt="" src={Icon1}/>
                    <span>liczba worków, co oddaje, komu</span>
                </div>
                <div className="summary-location">
                    <img alt="" src={Icon4}/>
                    <span>dla lokalizacji: lokalizacja</span>
                </div>
                <div className="summary-section">
                <div className="summary-address">
                    <h3>Adres odbioru:</h3>
                    <p>Ulica: </p>
                    <p>Miasto:</p>
                    <p>Kod pocztowy:</p>
                    <p>Numer telefonu:</p>
                </div>
                <div className="summary-date">
                    <h3>Termin odbioru:</h3>
                    <p>Data:</p>
                    <p>Godzina:</p>
                    <p>Uwagi dla kuriera:</p>
                </div>
                </div>
                <div className="review-step-button">
                <button onClick={() => navigation.previous()}>Wstecz</button>
                <button>Potwierdzam</button>
                </div>
            </div>
            </section>
            </>
            )
            }

            export default Review;