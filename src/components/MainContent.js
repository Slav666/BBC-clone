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
  homeMainCards,
  homeBottomCards,
  climateMainCards,
  climateBottomCards,
  coronaVirusMainCards,
  coronaVirusBottomCards,
  healthMainCards,
  healthBottomCards,
  politicsMainCards,
  politicsBottomCards,
  ukMainCards,
  ukBottomCards,
  worldMainCards,
  worldBottomCards,
  scienceMainCArds,
  scienceBottomCards,
  businessMainCards,
  businessBottomCards,
  techMainCards,
  techBottomCards,
}) => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route
          path="/home"
          element={<Home cards={homeMainCards} cards1={homeBottomCards} />}
        ></Route>
        <Route
          path="/climate"
          element={
            <Climate cards={climateMainCards} cards1={climateBottomCards} />
          }
        ></Route>
        <Route
          path="/coronavirus"
          element={
            <Coronavirus
              cards={coronaVirusMainCards}
              cards1={coronaVirusBottomCards}
            />
          }
        ></Route>
        <Route
          path="/uk"
          element={<Uk cards={ukMainCards} cards1={ukBottomCards} />}
        ></Route>
        <Route
          path="/world"
          element={<World cards={worldMainCards} cards1={worldBottomCards} />}
        ></Route>
        <Route
          path="/business"
          element={
            <Business cards={businessMainCards} cards1={businessBottomCards} />
          }
        ></Route>
        <Route
          path="/politics"
          element={
            <Politics cards={politicsMainCards} cards1={politicsBottomCards} />
          }
        ></Route>
        <Route
          path="/tech"
          element={<Tech cards={techMainCards} cards1={techBottomCards} />}
        ></Route>
        <Route
          path="/science"
          element={
            <Science cards={scienceMainCArds} cards1={scienceBottomCards} />
          }
        ></Route>
        <Route
          path="/health"
          element={
            <Health cards={healthMainCards} cards1={healthBottomCards} />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
