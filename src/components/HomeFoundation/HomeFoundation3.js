import React from "react";
import "../../scss/HomeHelping.scss";


export const HomeFoundation3 = () => {
    return (
        <> <div className="foundation-section helping-section">
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
        </div>
            <div className="foundation-examples section-article">

                <div className="foundation-article article-text">
                    <div className="foundation-title article-title ">
                        <h2>Fundacja "Vestibulum tempor"</h2>
                        <p>Cel i misja: pomoc młodzieży z ubogich rodzin</p>
                    </div>
                    <div className="items article-items">
                        <p>książki, sprzęt komputerowy</p>
                    </div>
                </div>

                <div className="foundation-article article-text">
                    <div className="foundation-title article-title">
                        <h2>Fundacja “Duis tincidunt”</h2>
                        <p>Quisque nibh quam, consequat non pharetra non, luctus eu quam. </p>
                    </div>
                    <div className="items article-items">
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>

                <div className="foundation-article article-text">
                    <div className="foundation-title article-title">
                        <h2>Fundacja "Etiam volutpat"</h2>
                        <p>Integer volutpat ultrices massa, porttitor gravida diam pulvinar eu.</p>
                    </div>
                    <div className="items article-items">
                        <p>Egestas, sed, tempus</p>
                    </div>
                </div>

            </div>
        </>
    )
}
