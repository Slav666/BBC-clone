import React from "react";
import "../../App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Climate from "../../NewsNavigationPages/climate";
import Coronavirus from "../../NewsNavigationPages/coronavirus";
import Home from "../../NewsNavigationPages/home";
import Uk from "../../NewsNavigationPages/uk";
import Business from "../../NewsNavigationPages/business";
import World from "../../NewsNavigationPages/world";
import Health from "../../NewsNavigationPages/health";
import Tech from "../../NewsNavigationPages/tech";
import Science from "../../NewsNavigationPages/science";
import Politics from "../../NewsNavigationPages/politics";
import SubpageLayout from "../subPageLayout/subPageLayout";

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
        <Route path="/stories" element={<SubpageLayout />}></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
