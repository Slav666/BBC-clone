import React from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import Climate from "../mainNavPages/climate";
import Coronavirus from "../mainNavPages/coronavirus";
import Home from "../mainNavPages/home";
import Uk from "../mainNavPages/uk";

const MainContent = () => {
  return (
    <div className="main-content">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/coronavirus">
          <Climate />
        </Route>
        <Route path="/climate">
          <Coronavirus />
        </Route>
        <Route path="/uk">
          <Uk />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContent;
