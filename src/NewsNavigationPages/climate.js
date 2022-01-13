import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";
import { useSelector, useDispatch } from "react-redux";

const Climate = () => {
  // const dispatch = useDispatch();
  // const cards = useSelector((state) => state.cards);

  const [climateMainCards, setClimateMainCards] = useState([]);
  const [climateBottomCards, setClimateBottomCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setClimateMainCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setClimateBottomCards(cardsFromServer);
    };
    getCards();
  }, []);

  const fetchCards = async () => {
    const res = await fetch("http://localhost:5000/cards");
    const data = await res.json();
    return data;
  };

  const fetchCards1 = async () => {
    const res = await fetch("http://localhost:5000/cards1");
    const data = await res.json();
    return data;
  };

  return (
    <div>
      <MainContentLayout cards={climateMainCards} cards1={climateBottomCards} />
    </div>
  );
};

export default Climate;
