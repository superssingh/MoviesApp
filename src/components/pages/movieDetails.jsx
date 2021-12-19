import React, { useState, useContext, useEffect } from "react";
import MovieContext from "../js/contexts/movieContext";
import * as TagNames from "../js/constants/constants";
import axios from "axios";
const MovieDetails = (props) => {
  const { movies } = useContext(MovieContext);
  const id = props.match.params.id;
  const [movie, setMovie] = useState([]);
  const [videoLinK, setVideoLink] = useState("");
  const [videoStatus, setVideoStatus] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData({ signal }) {
      // You can await here
      try {
        const selectedMovie = await movies.filter((m) => m.id === parseInt(id));
        setMovie(selectedMovie[0]);
        handleVideo(id);
      } catch (ex) {
        console.log("Error: ", ex);
      }
    }
    fetchData(id, abortController.signal);
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const handleVideo = async (id) => {
    const { data } = await axios.get(TagNames.getVideoKey(id));
    const videoLink = (await data.results[0]?.key)
      ? TagNames.getVideoLink(data.results[0].key)
      : "";

    const video = videoLink ? true : false;
    setVideoLink(videoLink);
    setVideoStatus(video);
  };

  // handlePage = () => {
  //   this.props.history.replace("/");
  // };

  return (
    <div className="MovieDetail">
      {movie.id && (
        <div>
          <img
            className="back-cover"
            src={TagNames.getImagePath(movie.poster_path)}
            srcSet={TagNames.getImagePath(movie.poster_path)}
            alt={movie.title}
            loading="lazy"
          ></img>
          <div className="MovieInfo">
            <img
              className="front-cover"
              src={TagNames.getImagePath(movie.backdrop_path)}
              srcSet={TagNames.getImagePath(movie.backdrop_path)}
              alt={movie.title}
              loading="lazy"
            ></img>
            <h1>{movie.title.toUpperCase()}</h1>
            <div className="overview">
              <h5>Overview</h5>
              <p>{movie.overview}</p>
            </div>
            <div>
              <h4>Rating: {movie.vote_average}/10</h4>
              <h4>Language: {movie.original_language.toUpperCase()}</h4>
            </div>
            {videoStatus && (
              <div className="videoPlayer">
                <iframe
                  src={videoLinK}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
