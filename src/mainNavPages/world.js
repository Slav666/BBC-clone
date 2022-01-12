import React, { useEffect, useState } from "react";
import Album from "../components/pageLayout";

const World = () => {
  const [worldMainCards, setWorldMainCards] = useState([]);
  const [worldBottomCards, setWorldBottomCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setWorldMainCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setWorldBottomCards(cardsFromServer);
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
      <Album cards={worldMainCards} cards1={worldBottomCards} />
    </div>
  );
};

export default World;
