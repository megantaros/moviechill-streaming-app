import axios from "axios";

const fetcherMovies = async () => {
  try {
    const params = {
      api_key: process.env.REACT_APP_TMDB_KEY,
    };

    const responseTrending = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/movie/popular`,
      { params }
    );

    const responseTopRated = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/movie/top_rated`,
      { params }
    );

    const responseUpcoming = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/movie/upcoming`,
      { params }
    );

    return {
      trending: responseTrending.data.results,
      topRated: responseTopRated.data.results,
      upcoming: responseUpcoming.data.results,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetcherMovies;
