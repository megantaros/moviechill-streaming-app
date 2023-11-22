import React from "react-bootstrap";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "../style/landingPages.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import CardMovies from "../components/CardMovies";

const CategoryPage = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    switch (pathname) {
      case "/popular":
        setTitle("Popular");
        break;
      case "/top_rated":
        setTitle("Top Rated");
        break;
      case "/upcoming":
        setTitle("Upcoming");
        break;
      default:
        setTitle("undefined");
        break;
    }

    document.title = `MovieChill | ${title}`;

    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/movie/${pathname}?language=en-US&page=${page}`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        }
      )
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        searchParams.set("page", page);
        setSearchParams(searchParams);
      });
  }, [title, searchParams, page, setSearchParams, pathname]);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handlePage = (newPage) => {
    setPage(newPage);
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  return (
    <main className="bg-category">
      <section id="detail-movie">
        <Container>
          <h4 className="title-section text-uppercase">{title}</h4>
        </Container>
        <Container>
          <Row className="my-4 row">
            {movies.length === 0 && (
              <Col className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Col>
            )}
            {movies.map((result, index) => (
              <CardMovies key={index} {...result} lable={title} />
            ))}
          </Row>
        </Container>
      </section>
      <Container className="pb-4">
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination gap-1">
              {page === 1 ? (
                <>
                  <li className="page-item disabled">
                    <Link className="page-link" onClick={handlePrev}>
                      Previous
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link
                      className="page-link"
                      onClick={() => handlePage(page)}
                    >
                      {page}
                      <span className="sr-only"></span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link"
                      onClick={() => handlePage(page + 1)}
                    >
                      {page + 1}
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" onClick={handleNext}>
                      Next
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="page-item">
                    <Link className="page-link" onClick={handlePrev}>
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link"
                      onClick={() => handlePage(page - 1)}
                    >
                      {page - 1}
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link
                      className="page-link"
                      onClick={() => handlePage(page)}
                    >
                      {page}
                      <span className="sr-only"></span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link"
                      onClick={() => handlePage(page + 1)}
                    >
                      {page + 1}
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" onClick={handleNext}>
                      Next
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </main>
  );
};

export default CategoryPage;
