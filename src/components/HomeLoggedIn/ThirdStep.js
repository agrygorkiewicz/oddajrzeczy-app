import React, {useState} from "react";
import "../../scss/HomeLoggenIn.scss";
import "../../scss/ThirdStep.scss";

const ThirdStep = ({navigation}) => {
    const [selected, setSelected] = useState("wybierz");
    return (
        <>
            <section className="four-parts">

                <div className="three-out-of-four">
            <p>Krok 3/4</p></div>
            <div className="third-step-form">
                <h3>Lokalizacja</h3>
                <select value={selected} placeholder="--wybierz" onChange={(e) => setSelected(e.target.value)}>
                    <option value="poznan">Poznań</option>
                    <option value="warszawa">Warszawa</option>
                    <option value="krakow">Kraków</option>
                    <option value="wroclaw">Wrocław</option>
                    <option value="katowice">Katowice</option>
                </select>
            </div>
            <div className="checkbox-span">
                <h4>Komu chcesz pomóc?</h4>
                <ul className="yellow-check">
                    <li>
                        <input type="checkbox" id="check_1" name="dzieciom" value="check_1"/>
                            <label htmlFor="check_1">dzieciom</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check_2" name="samotnym matkom" value="check_2"/>
                            <label htmlFor="check_2">samotnym matkom</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check_3" name="bezdomnym" value="check_3"/>
                            <label htmlFor="check_3">bezdomnym</label>
                    </li>
                    <br/>
                    <li>
                        <input type="checkbox" id="check_4" name="niepełnosprawnym" value="check_4"/>
                        <label htmlFor="check_4">niepełnosprawnym</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check_5" name="osobom starszym" value="check_5"/>
                        <label htmlFor="check_5">osobom starszym</label>
                    </li>
                </ul>

            </div>
            <div className="organization-input">
                <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input type="text"/>
            </div>
            <div className="third-step-button">
            <button onClick={() => navigation.previous()} >Wstecz</button>
            <button onClick={() => navigation.next()} >Dalej</button>
            </div>
            </section>
        </>
    )
}

export default ThirdStep;
