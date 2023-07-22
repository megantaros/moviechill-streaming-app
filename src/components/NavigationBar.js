import {
  Container,
  Navbar,
  Form,
  Button,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "../style/landingPages.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovie, getMovieList } from "../config/api";
import "../style/landingPages.css";

const NavigationBar = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(true);
  const MovieList = () => {
    return (
      <div className="d-flex justify-content-end">
        <div className="search-comp d-relative">
          {movies.map((movies) => {
            return (
              <Link
                to={`/detail/${movies.id}`}
                className="row select-movie m-0 p-0"
                onClick={() => setShow(false)}
              >
                <div className="col-4 m-0 py-2 overflow-hidden">
                  <img
                    src={`${process.env.REACT_APP_IMG_PATH}/${movies.poster_path}`}
                    className="img-search"
                  />
                </div>
                <div className="col-8 m-0 py-2">
                  <h3 className="text-search-title">{movies.title}</h3>
                  <div className="text-search">
                    Release : {movies.release_date}
                  </div>
                  <div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <span className="mx-2 text-rate">
                        {movies.vote_average}
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  const search = async (q) => {
    if (q.length > 0) {
      const query = await searchMovie(q);
      setMovies(query.results);
      console.log({ query: query });
      setShow(!show);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="position-relative" style={{ maxHeight: "100px" }}>
      <div
        className="container-fluid position-absolute bg-transparent"
        style={{ zIndex: 99 }}
      >
        <Navbar expand="lg" className="container shadow-none">
          <Navbar.Brand as={Link} to={`/`} className="navBrand">
            Movie<span className="navSpan">Chill</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to={"/"}
                exact
                activeClassName="navLinkActive"
                className={
                  location.pathname === "/" ? "navLinkActive" : "navLink"
                }
              >
                BERANDA
              </Nav.Link>
              <NavDropdown title="LIST KATEGORI" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={`/popular`}>
                  Popular
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/toprated`}>
                  Top Rated
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/upcoming`}>
                  Upcoming
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Cari film disini..."
                className="me-2"
                aria-label="Search"
                onChange={({ target }) => search(target.value)}
              />
              <Button as={Link} className="navButton">
                Cari
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="position-relative container">
          <div className="position-absolute search-movies">
            {show && <MovieList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
