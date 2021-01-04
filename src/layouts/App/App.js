import React from "react";
import './App.scss';
import Home from "../../components/Home/Home";

// import Register from "../../components/Register/Register";
import Login2 from "../../components/Login/Login2";

// noinspection ES6CheckImport
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route  path="/" exact component={Home}/>
                    <Route path="/login" component={Login2}/>
                    {/*<Route path="/register" component={Register}/>*/}
                </Switch>
            </Router>

        </>
    );
}

export default App;
