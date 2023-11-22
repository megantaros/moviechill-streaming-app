import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DetailMovie from "../Pages/DetailMoviePage";
import CategoryPage from "../Pages/CategoryPage";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:movieId" element={<DetailMovie />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
};

export default Main;
