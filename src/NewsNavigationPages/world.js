import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";
import SubPageLayout from "../components/subPageLayout/subPageLayout";
import { Route, Routes } from "react-router-dom";
const World = () => {
  const [worldCards, setWorldCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const articlesFromNewsApi = await fetchArticles();
      setWorldCards(articlesFromNewsApi);
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
      <Routes>
        <Route
          path="/:title"
          element={<SubPageLayout articles={worldCards} />}
        ></Route>
      </Routes>
      <MainContentLayout cards={worldCards} />
    </div>
  );
};

export default World;
