import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";

const Science = () => {
  const [scienceCards, setScienceCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const articlesFromNewsApi = await fetchArticles();
      setScienceCards(articlesFromNewsApi);
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
  };

  return (
    <div>
      <MainContentLayout cards={scienceCards} />
    </div>
  );
};

export default Science;
