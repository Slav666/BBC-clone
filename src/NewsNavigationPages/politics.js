import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";

const Politics = () => {
  const [politicsMainCards, setPoliticsMainCards] = useState([]);
  const [politicsBottomCards, setPoliticsBottomCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setPoliticsMainCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setPoliticsBottomCards(cardsFromServer);
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
      <MainContentLayout
        cards={politicsMainCards}
        cards1={politicsBottomCards}
      />
    </div>
  );
};

export default Politics;
