import React, { useEffect, useState } from "react";
import Album from "../components/pageLayout";

const Business = () => {
  const [businessMainCards, setBusinessMainCards] = useState([]);
  const [businessBottomCards, setBusinessBottomCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setBusinessMainCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setBusinessBottomCards(cardsFromServer);
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
      <Album cards={businessMainCards} cards1={businessBottomCards} />
    </div>
  );
};

export default Business;
