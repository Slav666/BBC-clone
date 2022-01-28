import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";
import { Route, Routes } from "react-router-dom";
import SubPageLayout from "../components/subPageLayout/subPageLayout";

const Health = () => {
  const [healthCards, setHealthCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const articlesFromNewsApi = await fetchArticles();
      setHealthCards(articlesFromNewsApi);
    };
    getCards();
  }, []);

  const fetchArticles = async () => {
    const res = await fetch(
      "http://newsapi.org/v2/everything?q=rich&from=2022-01-01&sortBy=publishedAt&apiKey=ba57445502c64f0abafb734fb946c26b"
    );
    const data = await res.json();
    const articles = data.articles;
    return articles;
    // return data;
  };

  return (
    <div>
      <MainContentLayout cards={healthCards} />
    </div>
  );
};

export default Health;
