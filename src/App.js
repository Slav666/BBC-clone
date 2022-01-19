import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import FooterLayout from "./components/Footer/FooterLayout";
import HeaderNewsNavigation from "../src/components/Header/HeaderNewsNavigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderNewsNavigation />

      <MainContent />

      <FooterLayout />
    </div>
  );
}

export default App;
