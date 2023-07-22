import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PopularPage from "../Pages/PopularPage";
import DetailMovie from "../Pages/DetailMoviePage";
import TopRatedPage from "../Pages/TopRatedPage";
import UpcomingPage from "../Pages/UpcomingPage";
import { useEffect } from "react";

const Main = () => {
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/popular":
        document.title = "MovieChill - Popular";
        break;
      case "/toprated":
        document.title = "MovieChill - Top Rated";
        break;
      case "/upcoming":
        document.title = "MovieChill - Upcoming";
        break;
      case "/detail/:movieId":
        document.title = "MovieChill - Detail Movie";
        break;
      default:
        document.title = "MovieChill - Home";
        break;
    }
  }, [location]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/detail/:movieId" element={<DetailMovie />} />
      </Routes>
    </div>
  );
};

export default Main;
