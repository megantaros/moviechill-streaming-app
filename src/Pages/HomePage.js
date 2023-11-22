import "../style/landingPages.css";
import { useState, useEffect } from "react";
import Intro from "../components/Intro";
import Section from "../components/Section";
import fetcherMovies from "../config/fetcher";

const HomePage = () => {
  const [movies, setMovies] = useState({
    trending: [],
    topRated: [],
    upcoming: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { trending, topRated, upcoming } = await fetcherMovies();
        setMovies({
          trending,
          topRated,
          upcoming,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Intro />
      <Section id="popular" title="Popular" data={movies.trending} />
      <Section id="toprated" title="Top Rated" data={movies.topRated} />
      <Section id="upcoming" title="Upcoming" data={movies.upcoming} />
    </main>
  );
};

export default HomePage;
