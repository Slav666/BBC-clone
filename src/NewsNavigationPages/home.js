import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";

const Home = () => {
  const [homeMainCards, setHomeMainCards] = useState([]);
  const [homeBottomCards, setHomeBottomCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setHomeMainCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setHomeBottomCards(cardsFromServer);
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
      <MainContentLayout cards={homeMainCards} cards1={homeBottomCards} />
    </div>
  );
};

export default Home;
