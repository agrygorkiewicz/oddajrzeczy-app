import React, {useState} from "react";
import "../../scss/HomeLoggenIn.scss";
import "../../scss/SecondStep.scss";

const SecondStep = ({navigation}) => {
    const [selected, setSelected] = useState("-- wybierz --");
    return (
        <>
            <section className="four-parts">
<div className="two-out-of-four">
    <p>Krok 2/4</p>
</div>
<div className="h-title">
    <h3> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            </div>
                <div className="second-step-form">
        <p>Liczba 60l worków:</p>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value="-- wybierz --" defaultValue={""}> --- wybierz ---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
                <div className="second-step-button">
    <button className="second-step-button" onClick={() => navigation.previous()} >Wstecz</button>
    <button className="second-step-button" onClick={() => navigation.next()} >Dalej</button>
                </div>
            </section>
        </>
    )
}

export default SecondStep;