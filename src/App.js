import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";
import TopNav from "./components/Top Nav/TopNav";
import PriceToTrade from "./components/Price To Trade/PriceToTrade";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";

function App() {
  const [isDark, setIsDark] = useContext(ThemeContext);
  return (
    <div className={`App ${isDark ? "theme-dark" : ""}`}>
      <TopNav />
      <PriceToTrade />
      <Table />
      <Footer />
      <div className="d-flex justify-content-center sticky-footer">
        <button className="btn btn-outline-info">
          Add hodlinfo to home screen
        </button>
      </div>
    </div>
  );
}

export default App;
