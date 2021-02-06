import React from "react";
import HomeContactForm from "../Home/HomeContactForm";
import "../../scss/HomeLoggenIn.scss";
import LoggedNav from "./LoggedNav";
import LoggedMainPage from "./LoggedMainPage";
import Form from "./Form";
import LoggedInfo from "./LoggedInfo";

// const defaultData = {
//     firstName: "",
//     lastName: "",
//     nickName: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     phone: "",
//     email: "",
// };
//
// const steps = [
//     { id: "names" },
//     { id: "address" },
//     { id: "contact" },
//     { id: "review" },
//     { id: "submit" },
// ];

const HomeLoggedIn = () => {

    return (

        <>
            <LoggedNav/>
            <LoggedMainPage/>
            <LoggedInfo/>
            <section className="four-parts">
                <Form/>
            </section>
            <HomeContactForm/>

        </>
    )
}

export default HomeLoggedIn;