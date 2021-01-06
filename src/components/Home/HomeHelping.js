import "../../scss/HomeHelping.scss";
import React, {useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import HomeOrganizations from "../HomeOrganization/HomeOrganizations";
import HomeCollection from "./HomeCollection";
import HomeFoundation from "../HomeFoundation/HomeFoundation";

const HomeHelping = () => {


    const [organizationSectionVisable, setOrganizationSectionVisable] = useState(false);
    const toggleOrganizationSectionVisable = () => {
        setOrganizationSectionVisable(prevState => !prevState);
        setCollectionSectionVisable(false);
       setFoundationSectionVisable(false)
    }
    const [collectionSectionVisable, setCollectionSectionVisable] = useState(false);
    const toggleCollectionSectionVisable = () => {
        setCollectionSectionVisable(prevState => !prevState);
            setFoundationSectionVisable(false);
        setOrganizationSectionVisable(false);

    }

    const [foundationSectionVisable, setFoundationSectionVisable] = useState(true);
    const toggleFoundationSectionVisable = () => {
        setFoundationSectionVisable(prevState => !prevState);
        setCollectionSectionVisable(false);
        setOrganizationSectionVisable(false);
    }

    return (
        <section className="section-help" id={"section-help"}>
            <div className="who-do-we-help">
                <h1>Komu pomagamy?</h1>
                <img alt="" src={Decoration}/>
            </div>
            <div className="help-examples">
                <button onClick={toggleFoundationSectionVisable} >Fundacjom</button>
                <button onClick={toggleOrganizationSectionVisable}>Organizacjom <br/> pozarządowym</button>
                <button onClick={toggleCollectionSectionVisable}>Lokalnym <br/> zbiórkom</button>
            </div>

            {foundationSectionVisable && <HomeFoundation/>}
            {organizationSectionVisable &&  <HomeOrganizations/>}
            {collectionSectionVisable && <HomeCollection/>}

        </section>
    )
};

export default HomeHelping;
