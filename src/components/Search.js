import "../style/landingPages.css";
import playButton from "../assets/images/play-button.png";
import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../config/api";
import NavigationBar from "./NavigationBar";
import {
  Container,
  Navbar,
  Form,
  Button,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Link
          to={`${process.env.REACT_APP_BASE_URL}/movie/{movie_id}?api_key=${process.env.REACT_APP_TMDB_KEY}`}
        >
          <div key={i} className="col">
            <div className="card mx-auto">
              <div className="top-left-text">TRENDING</div>
              <img
                src={`${process.env.REACT_APP_IMG_PATH}/${movie.poster_path}`}
                alt="Trending"
                className="image"
              />
              <div className="overlay">
                <img src={playButton} className="img-overlay" />
              </div>
            </div>
            <div className="movie-title px-2">
              {movie.title}
              <div className="movie-sub-title mt-1">{movie.release_date}</div>
            </div>
          </div>
        </Link>
      );
    });
  };

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      // console.log({ query : query })
    }
  };

  // console.log({ popularMovies : popularMovies })

  return (
    <div>
      <Navbar bg="transparent" expand="lg" className="shadow-none">
        <Container>
          <Navbar.Brand href="#" className="navBrand">
            Movie<span className="navSpan">Chill</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"} className="navLink">
                BERANDA
              </Nav.Link>
              <NavDropdown title="LIST KATEGORI" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  as={Link}
                  to={"/trending"}
                  className="navItem"
                >
                  Trending
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Superhero</NavDropdown.Item>
                <NavDropdown.Item href="#">Horror</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <input
                type="search"
                placeholder="Cari film disini..."
                className="me-2"
                aria-label="Search"
                onChange={({ target }) => search(target.value)}
              />
              <Button className="navButton" onClick={search}>
                Cari
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container text-center">
        <h1>Cari Film Kesayangan Anda</h1>
        <input
          placeholder="Cari Film di sini..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="row row-cols-4">
          <PopularMovieList />
        </div>
      </div>
    </div>
  );
};

export default Search;
