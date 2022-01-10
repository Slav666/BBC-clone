import React, { useEffect, useState } from "react";
import Album from "../components/pageLayout";

const Home = () => {
  const [cards2, setCards] = useState([]);
  const [cards3, setCards1] = useState([]);

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
      <Album cards={cards2} cards1={cards3} />
    </div>
  );
};

export default Home;
