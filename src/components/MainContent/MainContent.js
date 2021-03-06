import React from "react";
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

const MainContent = ({
  homeCards,
  climateCards,
  coronaVirusCards,
  healthCards,
  politicsCards,
  ukCards,
  worldCards,
  scienceCards,
  businessCards,
  techCards,
}) => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home cards={homeCards} />}></Route>
        <Route
          path="/climate/*"
          element={<Climate cards={climateCards} />}
        ></Route>
        <Route
          path="/coronavirus/*"
          element={<Coronavirus cards={coronaVirusCards} />}
        ></Route>
        <Route path="/uk/*" element={<Uk cards={ukCards} />}></Route>
        <Route path="/world/*" element={<World cards={worldCards} />}></Route>
        <Route
          path="/business/*"
          element={<Business cards={businessCards} />}
        ></Route>
        <Route
          path="/politics/*"
          element={<Politics cards={politicsCards} />}
        ></Route>
        <Route path="/tech/*" element={<Tech cards={techCards} />}></Route>
        <Route
          path="/science/*"
          element={<Science cards={scienceCards} />}
        ></Route>
        <Route
          path="/health/*"
          element={<Health cards={healthCards} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
