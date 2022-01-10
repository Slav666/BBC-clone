import React, { useEffect, useState } from "react";
import Album from "../components/pageLayout";

const Uk = () => {
  const [cards7, setCards] = useState([]);
  const [cards8, setCards1] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setCards1(cardsFromServer);
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
      <Album cards={cards7} cards1={cards8} />
    </div>
  );
};

export default Uk;
