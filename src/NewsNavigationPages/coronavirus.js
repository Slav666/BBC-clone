import React, { useEffect, useState } from "react";
import MainContentLayout from "../components/MainContent/MainContentLayout";
import SubPageLayout from "../components/subPageLayout/subPageLayout";
import { Route, Routes } from "react-router-dom";

const Coronavirus = () => {
  const [coronaVirusCards, setCoronaVirusCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const articlesFromNewsApi = await fetchArticles();
      setCoronaVirusCards(articlesFromNewsApi);
    };
    getCards();
  }, []);

  const fetchArticles = async () => {
    const res = await fetch(
      "http://newsapi.org/v2/everything?q=coronavirus&from=2022-01-15&sortBy=publishedAt&apiKey=ba57445502c64f0abafb734fb946c26b"
    );

    const data = await res.json();
    const articles = data.articles;
    return articles;
    // return data;
  };

  return (
    <div>
      <Routes>
        <Route
          path="/:title"
          element={<SubPageLayout articles={coronaVirusCards} />}
        ></Route>
      </Routes>

      <MainContentLayout cards={coronaVirusCards} />
    </div>
  );
};

export default Coronavirus;
