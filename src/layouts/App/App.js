import './App.scss';
import Home from "../../components/Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "../../components/Home/Nav";
import React from "react";
import Register from "../../components/Register/Register";

function App() {
    return (
        <>
            <Router>
                {/*<Nav/>*/}
                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Route path="/register" component={Register}/>
                </Switch>

            </Router>

        </>
    );
}

export default App;
