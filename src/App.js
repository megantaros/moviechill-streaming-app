import "./App.css";
import "./style/landingPages.css";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Main from "./config/Main";
import FooterSection from "./components/FooterSection";

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_TMDB_KEY;

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Main />
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
