import React from "react";
import "../../scss/HomeHelping.scss";


export const HomeFoundation1 = () => {
    return (
        <> <div className="foundation-section helping-section">
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
        </div>
            <div className="foundation-examples section-article">

                <div className="foundation-article article-text">
                    <div className="foundation-title article-title ">
                        <h2>Fundacja “Dbam o Zdrowie”</h2>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <div className="items article-items">
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>

                <div className="foundation-article article-text">
                    <div className="foundation-title article-title">
                        <h2>Fundacja “Dla dzieci”</h2>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="items article-items">
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>

                <div className="foundation-article article-text">
                    <div className="foundation-title article-title">
                        <h2>Fundacja “Bez domu”</h2>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>
                    <div className="items article-items">
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>

            </div>
        </>
    )
}
