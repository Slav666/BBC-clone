import React, { useEffect, useState } from "react";
import Album from "../components/pageLayout";

const World = () => {
  const [card12, setCards] = useState([]);
  const [cards13, setCards1] = useState([]);

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
      <Album cards={card12} cards1={cards13} />
    </div>
  );
};

export default World;
