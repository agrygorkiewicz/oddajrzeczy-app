import React, {useState} from "react";
import {HomeOrganization1} from "./HomeOrganization1";
import {HomeOrganization2} from "./HomeOrganization2";

const HomeOrganizations = () => {
    const tabs = [<HomeOrganization1/>, <HomeOrganization2/>]
    const [tab, setTab] = useState(tabs[0]);
    return (
        <><div>
            {tab}
        </div>
            <div className="page-number">
                <p onClick={() => setTab(tabs[0])}>1</p>
                <p onClick={() => setTab(tabs[1])}>2</p>

            </div>
    </>

        )
}

export default HomeOrganizations;