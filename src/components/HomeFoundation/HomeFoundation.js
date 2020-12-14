import React, {useState} from "react";
import {HomeFoundation1} from "./HomeFoundation1";
import {HomeFoundation3} from "./HomeFoundation3";
import {HomeFoundation2} from "./HomeFoundation2";


const HomeFoundation = () => {
    const tabs = [<HomeFoundation1/>, <HomeFoundation2/>, <HomeFoundation3/>]
    const [tab, setTab] = useState (tabs[0]);
    return (
        <>
            <div>
                {tab}
            </div>
            <div className="page-number">
                <p onClick={() => setTab(tabs[0])}>1</p>
                <p onClick={() => setTab(tabs[1])}>2</p>
                <p onClick={() => setTab(tabs[2])}>3</p>
            </div>
        </>

    )
}

export default HomeFoundation;
