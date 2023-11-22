import "./App.css";
import "./style/landingPages.css";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Main from "./config/Main";
import FooterSection from "./components/FooterSection";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Oval
          height={60}
          width={60}
          color="#f4eae0"
          // wrapperStyle={{ position: "fixed", top: "50%", left: "50%" }}
          wrapperClass="loader"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#c3b5a6"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      ) : (
        <>
          <NavigationBar />
          <Main />
          <FooterSection />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
