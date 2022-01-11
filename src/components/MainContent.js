import React from "react";
import "../App.css";
import { Route, Routes, Navigate } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route
          path="/home"
          element={<Home cards={cards2} cards1={cards3} />}
        ></Route>
        <Route
          path="/climate"
          element={<Climate cards={cards} cards1={cards1} />}
        ></Route>
        <Route
          path="/coronavirus"
          element={<Coronavirus cards={cards4} cards1={cards5} />}
        ></Route>
        <Route
          path="/uk"
          element={<Uk cards={cards7} cards1={cards8} />}
        ></Route>
        <Route
          path="/world"
          element={<World cards={cards12} cards1={cards13} />}
        ></Route>
        <Route
          path="/business"
          element={<Business cards={cards} cards1={cards1} />}
        ></Route>
        <Route
          path="/politics"
          element={<Politics cards={cards} cards1={cards1} />}
        ></Route>
        <Route
          path="/tech"
          element={<Tech cards={cards} cards1={cards1} />}
        ></Route>
        <Route
          path="/science"
          element={<Science cards={cards} cards1={cards1} />}
        ></Route>
        <Route
          path="/health"
          element={<Health cards={cards} cards1={cards1} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
