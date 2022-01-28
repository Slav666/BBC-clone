import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";
import SubPageLayout from "../components/subPageLayout/subPageLayout";
import { Route, Routes } from "react-router-dom";
const Uk = () => {
  const [ukCards, setUkCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const articlesFromNewsApi = await fetchArticles();
      setUkCards(articlesFromNewsApi);
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
          element={<SubPageLayout articles={ukCards} />}
        ></Route>
      </Routes>
      <MainContentLayout cards={ukCards} />
    </div>
  );
};

export default Uk;
