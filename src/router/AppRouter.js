import React from "react";
// import { HashRouter } from 'react-router-dom';
// import {  Router, Switch, Redirect, Route } from 'react-router';
import {
    HashRouter,
    BrowserRouter,
    Switch,
    Routes,
    Route,
} from "react-router-dom";
import About from "../pages/About";
import Help from "../pages/Help";
import Home from "../pages/Home";

const AppRouter = () => (
    <HashRouter basename="">
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/help" element={<Help />} exact />
        </Routes>
    </HashRouter>
)

export default AppRouter;