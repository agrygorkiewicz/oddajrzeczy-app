// import React from "react";
// import db from "../firebase";
// import {Link} from "react-router-dom";
// import HomeLoggedImage from "../../assets/Form-Hero-Image.jpg";
// import Decoration from "../../assets/Decoration.svg";
// import HomeContactForm from "../Home/HomeContactForm";
// import  "../../scss/HomeLoggenIn.scss";
// // import ForthStep from "./ForthStep";
// // import Logout from "../Logout/Logout";
// // import Summary from "./Summary";
// // import FirstStep from "./FirstStep";
// // import Logout from "../../components/Logout/Logout";
//
//
// const HomeLoggedIn = () => {
//
//     const handleSignOut = () => {
//         db.auth().signOut();
//         return (
//             <Logout/>
//         )
//
//     }
//
//     return (
//
//         <>
//
//             <header>
//                 <div className="logged-in">
//                     <h3>user</h3>
//                     <li>Oddaj rzeczy</li>
//                     {/*<Link to="/logout">*/}
//                     <li onClick={handleSignOut}>Wyloguj</li>
//                 {/*</Link>*/}
//                 </div>
//                 <div className="navigation-logged-in">
//                     <nav>
//                         <ul>
//                             <Link to="/home">
//                             <li>Start</li>
//                             </Link>
//                             <li><a href={"/home#four-steps"}>O co chodzi?</a></li>
//                             <li><a href={"/home#about"}>O nas</a></li>
//                             <li><a href={"/home#foundations"}>Fundacja i organizacje</a></li>
//                             <li><a href={"/home#contact"}>Kontakt</a></li>
//
//                         </ul>
//                     </nav>
//                 </div>
//
//             </header>
//
//             <section className="logged-main-page">
//                 <div className="home-cardigan-image">
//                     <img alt="" className="Home-Logged-Image" src={HomeLoggedImage}/>
//                 </div>
//                 <div className="logged-main-text">
//                     <h1>Zacznij pomagać</h1>
//                     <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
//                     <img alt="" src={Decoration}/>
//                     <div className="main-options four-squares">
//
//                         <div className="square">
//                             <div className="square-border">
//                                 <div className="square-text">
//                                     <p>1</p>
//                                     <p>Wybierz rzeczy</p>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="square">
//                             <div className="square-border">
//                                 <div className="square-text">
//                                     <p>2</p>
//                                     <p>Spakuj je w worki</p>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="square">
//                             <div className="square-border">
//                                 <div className="square-text">
//                                     <p>3</p>
//                                     <p>Wybierz fundację</p>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="square">
//                             <div className="square-border">
//                                 <div className="square-text">
//                                     <p>4</p>
//                                     <p>Zamów kuriera</p>
//                                 </div>
//                             </div>
//                         </div>
//
//
//                     </div>
//                 </div>
//             </section>
//             <section className="important-section">
//                 <div className="important-text">
//                     <h3> Ważne!</h3>
//                     <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
//                         przekazać.</p>
//                 </div>
//             </section>
//             <section className="four-parts">
//                 <FirstStep/>
//
//             </section>
//             <HomeContactForm/>
//
//         </>
//     )
// }
//
// export default HomeLoggedIn;