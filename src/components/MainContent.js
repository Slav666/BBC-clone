import React from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import News from "../pages/News";
import Sport from "../pages/Sport";
import Home from "../pages/Home";
import Weather from "../pages/Weather";

const MainContent = () => {
  return (
    <div className="main-content">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/sport">
          <Sport />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContent;
