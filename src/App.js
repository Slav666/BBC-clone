import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import FooterLayout from "./components/Footer/FooterLayout";

function App() {
  return (
    <div className="App">
      <Header />

      <MainContent />
      <FooterLayout />
    </div>
  );
}

export default App;
