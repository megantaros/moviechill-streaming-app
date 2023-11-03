import { Row, Col, Container } from "react-bootstrap";
import playButton from "../assets/images/play-button.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/landingPages.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
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
        <h4 className="title-section">POPULAR</h4>
      </Container>
      <Container className="text-center">
        <Row className="my-4 row">
          {movies.map((result, index) => {
            return (
              <Col
                as={Link}
                key={index}
                className="col-md-4 col-lg-3 col-6 my-2 text-decoration-none"
                to={`/detail/${result.id}`}
              >
                <div className="card mx-auto">
                  <div className="top-left-text">POPULAR</div>
                  <img
                    src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`}
                    alt="Trending"
                    className="image"
                  />
                  <div className="overlay">
                    <img
                      src={playButton}
                      className="img-overlay"
                      alt="Play Button"
                    />
                  </div>
                </div>
                <div className="movie-title px-2">
                  {result.title}
                  <div className="movie-sub-title mt-1">
                    {result.release_date}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Link to={`/popular`} className="btnList mt-5 rounded-2">
          Lihat Populer
        </Link>
      </Container>
    </div>
  );
};

export default Popular;
