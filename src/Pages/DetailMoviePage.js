import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SlideMovie from "../components/SlideMovie";
import "../style/landingPages.css";
import YouTube from "react-youtube";

const DetailMoviePage = () => {
  const params = useParams();
  const [detail, setDetail] = useState();
  const [videos, setVideos] = useState();
  const [show, setShow] = useState(false);

  function formattedDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();

    return `${year}`;
  }

  useEffect(() => {
    const { movieId } = params;
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          append_to_response: "videos",
        },
      })
      .then((response) => {
        setDetail(response.data);
        const trailer = response.data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setVideos(trailer);
      });
  }, [params?.movieId, params]);

  // console.log(detail.backdrop_path);

  const YoutubeTrailer = () => {
    const opts = {
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div>
        <YouTube
          className={"container-youtube"}
          videoId={videos?.key}
          opts={opts}
        />
        <button
          className="btn btn-close"
          onClick={() => setShow(!show)}
        ></button>
      </div>
    );
  };

  const styleBackground = {
    background: "#2A2723",
    backgroundImage: `url(${process.env.REACT_APP_IMG_PATH}/${detail?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundBlendMode: "multiply",
    minHeight: "100vh",
    width: "100%",
    // filter: "blur(4px)",
  };

  return (
    <main className="bg-detail">
      <header
        id="hero-detail"
        className="position-relative d-flex justify-content-center align-items-center w-100 h-100 py-5"
        style={styleBackground}
      >
        <div className="container container-hero-detail">
          <div className="row">
            <div className="col-lg-3 col-12 d-flex py-3 justify-content-center">
              <img
                src={`${process.env.REACT_APP_IMG_PATH}/${detail?.poster_path}`}
                className="img-backdrop my-3"
                alt="Poster Movie"
              />
            </div>
            <div className="col-lg-9 col-12 d-flex align-items-center">
              <div className="text-detail-movie-hero">
                <h1 className="fw-bold">{detail?.title}</h1>
                <div className="text-detail-date">
                  {formattedDate(detail?.release_date)}
                </div>
                <div className="divider my-lg-3 my-2"></div>
                <div className="d-flex gap-3">
                  <Link
                    onClick={() => setShow(!show)}
                    className="px-3 text-detail-play d-flex align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-play-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <span>Play Trailer</span>
                  </Link>
                  <div className="px-3 text-detail-rating d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <span className="m-2">{detail?.vote_average}</span>
                  </div>
                  <div className="px-3 text-detail-votes d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-people-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                    <span className="m-2">{detail?.vote_count} Votes</span>
                  </div>
                </div>
                <div className="divider my-lg-3 my-2"></div>
                <div className="text-detail-genres">
                  {detail?.genres.map((res) => res.name).join(" | ")}
                </div>
                <h3 className="mt-4">Overview : </h3>
                <p className="text-justify text-detail-overview">
                  {detail?.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>{show && <YoutubeTrailer />}</div>
      </header>
      <div className="container mt-4">
        <SlideMovie />
      </div>
    </main>
  );
};

export default DetailMoviePage;
