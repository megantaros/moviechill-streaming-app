import { Row, Col, Container } from "react-bootstrap";
import playButton from "../assets/images/play-button.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "../style/landingPages.css";
import { Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_TMDB_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;
const img = process.env.REACT_APP_IMG_PATH;

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/movie/top_rated`, {
        params: {
          api_key: apiKey,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <Container>
        <h4 className="title-section">TOP RATED</h4>
      </Container>
      <Container>
        <Row className="my-4 row">
          {movies.map((result, index) => {
            return (
              <Col
                as={Link}
                to={`/detail/${result.id}`}
                key={index}
                className="col-md-4 col-lg-3 col-6 my-2 text-decoration-none"
              >
                <div className="card mx-auto">
                  <div className="top-left-text">TOP RATED</div>
                  <img
                    src={`${img}/${result.poster_path}`}
                    alt="Peaky Blinder"
                    className="image"
                  />
                  <div className="overlay">
                    <img src={playButton} className="img-overlay" />
                  </div>
                </div>
                <div className="movie-title">
                  {result.title}
                  <div className="movie-sub-title mt-1">
                    {result.release_date}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="text-center">
        <Link to={"/toprated"} className="btnList mt-5 rounded-2">
          Lihat Top Rated
        </Link>
      </Container>
    </div>
  );
};

export default TopRated;
