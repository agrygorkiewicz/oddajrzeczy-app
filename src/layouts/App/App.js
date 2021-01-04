import './App.scss';
import Home from "../../components/Home/Home";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Nav from "../../components/Home/Nav";
import React from "react";
// import Register from "../../components/Register/Register";
import Login2 from "../../components/Login/Login2";


function App() {
    return (
        <>
            {/*<Home/>*/}
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/login" component={Login2}/>
                    {/*<Route path="/register" component={Register}/>*/}
                </Switch>

            </Router>

        </>
    );
}

export default App;
