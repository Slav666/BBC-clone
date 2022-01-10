import React from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import Climate from "../mainNavPages/climate";
import Coronavirus from "../mainNavPages/coronavirus";
import Home from "../mainNavPages/home";
import Uk from "../mainNavPages/uk";
import Business from "../mainNavPages/business";
import World from "../mainNavPages/world";
import Health from "../mainNavPages/health";
import Tech from "../mainNavPages/tech";
import Science from "../mainNavPages/science";
import Politics from "../mainNavPages/politics";

const MainContent = ({
  cards,
  cards1,
  cards2,
  cards3,
  cards4,
  cards5,
  cards7,
  cards8,
  cards12,
  cards13,
}) => {
  return (
    <div className="main-content">
      <Switch>
        <Route path="/home">
          <Home cards={cards2} cards1={cards3} />
        </Route>
        <Route path="/climate">
          <Climate cards={cards} cards1={cards1} />
        </Route>
        <Route path="/coronavirus">
          <Coronavirus cards={cards4} cards1={cards5} />
        </Route>
        <Route path="/uk">
          <Uk cards={cards7} cards1={cards8} />
        </Route>
        <Route path="/world">
          <World cards={cards12} cards1={cards13} />
        </Route>
        <Route path="/business">
          <Business cards={cards} cards1={cards1} />
        </Route>
        <Route path="/politics">
          <Politics cards={cards} cards1={cards1} />
        </Route>
        <Route path="/tech">
          <Tech cards={cards} cards1={cards1} />
        </Route>
        <Route path="/science">
          <Science cards={cards} cards1={cards1} />
        </Route>
        <Route path="/health">
          <Health cards={cards} cards1={cards1} />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContent;
