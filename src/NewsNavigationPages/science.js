import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";

const Science = () => {
  const [scienceMainCards, setScienceMainCards] = useState([]);
  const [scienceBottomCards, setScienceBottomCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setScienceMainCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setScienceBottomCards(cardsFromServer);
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
      <MainContentLayout cards={scienceMainCards} cards1={scienceBottomCards} />
    </div>
  );
};

export default Science;
