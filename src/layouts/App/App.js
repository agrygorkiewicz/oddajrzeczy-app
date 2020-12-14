import './App.scss';
import React from "react";
// components
import Home from "../../components/Home/Home";
// import {BrowserRouter as Router} from "react-router-dom";
// noinspection ES6CheckImport
// import {Route, Switch} from "react-router-dom";
// import Register from "../../components/Register/Register";
// import LoginPage2 from "../../components/Login/LoginPage2";
// import Logout from "../../components/Logout/Logout";



function App() {
    return (

        <>
<Home/>
{/*            <Router>*/}
                {/*<Switch>*/}
                    {/*<Route exact path="/home" component={Home}/>*/}
                    {/*<Route path="/login" component={LoginPage2}/>*/}
                    {/*<Route path="/register" component={Register}/>*/}
                    {/*<Route path="/logout" component={Logout}/>*/}
                {/*</Switch>*/}

            {/*</Router>*/}

        </>
    )
}


export default App;

