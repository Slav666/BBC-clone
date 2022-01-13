import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";

const Coronavirus = () => {
  const [coronaVirusMainCards, setCoronaVirusMainCards] = useState([]);
  const [coronaVirusBottomCards, setCoronaVirusBottomCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCoronaVirusMainCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setCoronaVirusBottomCards(cardsFromServer);
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
        cards={coronaVirusMainCards}
        cards1={coronaVirusBottomCards}
      />
    </div>
  );
};

export default Coronavirus;
