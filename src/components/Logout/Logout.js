import React from "react";
import "../../scss/Logout.scss";
import Decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import Nav from "../../components/Home/Nav";
const Logout = () => {
    return (
        <>
            {/*<Nav/>*/}
        <section className="logout-section">
            <h2> Wylogowanie nastąpiło <br/> pomyślnie! <br/></h2>
            <img alt="" src={Decoration}/>
            {/*<Link to="/home">*/}
            <button>Strona główna</button>
        {/*</Link>*/}
        </section>
            </>
    )
}

export default Logout;