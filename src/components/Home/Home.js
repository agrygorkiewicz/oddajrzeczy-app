import "../../scss/Home.scss";
import React from "react";
import "../../scss/settings/colors.scss";

// components
import NavHome from "./NavHome";
import HomeMainPage from "./HomeMainPage";
// import HomeThreeColumns from "./HomeThreeColumns";
// import HomeFourSteps from "./HomeFourSteps";
// import HomeAboutUs from "./HomeAboutUs";
// import HomeHelping from "./HomeHelping";
// import HomeContactForm from "./HomeContactForm";
// import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <NavHome/>
            <HomeMainPage/>
            {/*<HomeThreeColumns/>*/}
            {/*<HomeFourSteps/>*/}
            {/*<HomeAboutUs/>*/}
            {/*<HomeHelping/>*/}
            {/*<HomeContactForm/>*/}
            {/*<Footer/>*/}
        </>
    )
}

export default Home;