import React, { useEffect, useState } from "react";
import Album from "../components/pageLayout";

const Uk = () => {
  const [ukMainCards, setUkMainCards] = useState([]);
  const [ukBottomCards, setUkBottomCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setUkMainCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setUkBottomCards(cardsFromServer);
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
      <Album cards={ukMainCards} cards1={ukBottomCards} />
    </div>
  );
};

export default Uk;
