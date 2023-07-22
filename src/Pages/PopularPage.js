import React from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import "../style/landingPages.css";
import playButton from "../assets/images/play-button.png";
import { Oval } from "react-loader-spinner";
import { useState, useEffect } from "react";
import axios from "axios";
import Aos from "aos";
import { Link, useSearchParams } from "react-router-dom";

const PopularPage = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/movie/popular?language=en-US&page=${page}`,
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
    Aos.init({
      duration: 800,
      delay: 100,
    });
  }, [page]);

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
    <div>
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
        <div className="bg-category">
          <section id="detail-movie">
            <Container>
              <h4 className="title-section">POPULAR</h4>
            </Container>
            <Container>
              <Row className="my-4 row">
                {movies.map((result, index) => {
                  return (
                    <Link
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
                          <img src={playButton} className="img-overlay" />
                        </div>
                      </div>
                      <div className="movie-title px-2">
                        {result.title}
                        <div className="movie-sub-title mt-1">
                          {result.release_date}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Row>
            </Container>
          </section>
          <Container className="pb-4">
            <div className="d-flex justify-content-center">
              <nav>
                <ul class="pagination gap-1">
                  {page === 1 ? (
                    <>
                      <li class="page-item disabled">
                        <Link class="page-link" onClick={handlePrev}>
                          Previous
                        </Link>
                      </li>
                      <li class="page-item active">
                        <Link
                          class="page-link"
                          onClick={() => handlePage(page)}
                        >
                          {page}
                          <span class="sr-only"></span>
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link
                          class="page-link"
                          onClick={() => handlePage(page + 1)}
                        >
                          {page + 1}
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" onClick={handleNext}>
                          Next
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li class="page-item">
                        <Link class="page-link" onClick={handlePrev}>
                          Previous
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link
                          class="page-link"
                          onClick={() => handlePage(page - 1)}
                        >
                          {page - 1}
                        </Link>
                      </li>
                      <li class="page-item active">
                        <Link
                          class="page-link"
                          onClick={() => handlePage(page)}
                        >
                          {page}
                          <span class="sr-only"></span>
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link
                          class="page-link"
                          onClick={() => handlePage(page + 1)}
                        >
                          {page + 1}
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" onClick={handleNext}>
                          Next
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default PopularPage;
