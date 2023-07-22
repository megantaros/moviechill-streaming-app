import "../style/landingPages.css";
import Intro from "../components/Intro";
import { Oval } from "react-loader-spinner";
import { useState, useEffect } from "react";
import TopRated from "../components/TopRated";
import Coming from "../components/Upcoming";
import Popular from "../components/Popular";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {loading ? (
        <Oval
          height={80}
          width={80}
          color="#f4eae0"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#c3b5a6"
          strokeWidth={5}
          strokeWidthSecondary={5}
        />
      ) : (
        <div>
          <div className="myBg">
            <Intro />
          </div>
          <section id="popular">
            <Popular />
          </section>
          <section id="toprated">
            <TopRated />
          </section>
          <section id="upcoming">
            <Coming />
          </section>
        </div>
      )}
    </>
  );
};

export default HomePage;
