import React from "react";
import "../style/landingPages.css";
import { Card, Col } from "react-bootstrap";
import playButton from "../assets/images/play-button.png";
import { Link } from "react-router-dom";

const CardMovies = (props) => {
  const { id, poster_path, title, release_date, vote_average, lable } = props;

  const formattedDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();

    return `${year}`;
  };

  return (
    <Col
      as={Link}
      className="text-decoration-none m-0 p-2"
      to={`/detail/${id}`}
      xl={3}
      lg={3}
      md={3}
      sm={6}
      xs={6}
    >
      <Card className="card">
        <div className="position-relative overflow-hidden">
          <div className="top-left-text">{lable}</div>
          <Card.Img
            variant="top"
            src={`${process.env.REACT_APP_IMG_PATH}/${poster_path}`}
            className="image rounded-0"
          />
          <Card.ImgOverlay className="overlay rounded-0">
            <img src={playButton} className="img-overlay" alt="Play Button" />
          </Card.ImgOverlay>
        </div>
        <Card.Body className="p-0">
          <div className="m-0 d-flex flex-column justify-content-center align-items-center">
            <h3 className="movie-title m-0 p-0">
              {title} ({formattedDate(release_date)})
            </h3>
            <p className="movie-sub-title m-0 p-0"></p>
            <span className="d-flex justify-content-center align-items-center gap-2 movie-sub-title m-0 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              {vote_average} / 10
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMovies;
