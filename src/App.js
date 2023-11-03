import "./App.css";
import "./style/landingPages.css";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Main from "./config/Main";
import FooterSection from "./components/FooterSection";

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
