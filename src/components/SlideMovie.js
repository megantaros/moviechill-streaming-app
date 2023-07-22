import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getMovieList } from "../config/api";
import "../style/landingPages.css";

const SlideMovie = () => {
  const Responsive = () => {
    let slidesToShow = 6;
    const [movies, setMovies] = useState([]);

    const NextArrow = (props) => {
      const { onClick, currentSlide, slideCount } = props;
      return (
        <>
          {currentSlide !== slideCount - slidesToShow && (
            <div
              className={
                "arrow-slide-right d-flex align-items-center justify-content-center shadow-sm"
              }
              onClick={onClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          )}
        </>
      );
    };

    const PrevArrow = (props) => {
      const { onClick, currentSlide } = props;
      console.log(currentSlide);
      return (
        <>
          {currentSlide !== 0 && (
            <div
              className={
                "arrow-slide-left d-flex align-items-center justify-content-center shadow-sm"
              }
              onClick={onClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </div>
          )}
        </>
      );
    };

    useEffect(() => {
      getMovieList().then((res) => {
        setMovies(res);
        // console.log(movies);
      });
    }, []);

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 6,
      initialSlide: slidesToShow,
      lazyLoad: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
      ],
    };
    return (
      <div>
        <h3 className="title-section mb-4 p-0">Rekomendasi</h3>
        <Slider {...settings}>
          {movies.map((data) => {
            return (
              <div className="pe-lg-3 pe-md-3 pe-2">
                <Link to={`/detail/${data?.id}`}>
                  <div className="movie-rekomendasi position-relative overflow-hidden ">
                    <div className="top-left-text" style={{ zIndex: 99 }}>
                      REKOMENDASI
                    </div>
                    <img
                      src={`${process.env.REACT_APP_IMG_PATH}/${data?.poster_path}`}
                      className="w-100"
                    />
                    <div className="overlay">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi  bi-play-circle-fill img-overlay"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      </svg>
                    </div>
                  </div>
                </Link>
                <h6 className="mt-3 text-rekomendasi">{data?.title}</h6>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid" style={{ minHeight: "50vh" }}>
        <div className="row">
          <div className="col-12">
            <Responsive />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideMovie;
