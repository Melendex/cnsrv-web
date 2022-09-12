import React from "react";
// import { Router, Switch } from 'react-router-dom';
// import {  Router, Switch, Redirect, Route } from 'react-router';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/about" element={<About/>} exact/>
        </Routes>
    </Router>
)

export default AppRouter;