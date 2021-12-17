import React, { useEffect, useContext } from "react";
import axios from "axios";
import * as TagNames from "../js/constants/constants";
import MoviesList from "../jsx/moviesList";
import UserContext from "../js/contexts/userContext";
import MovieContext from "../js/contexts/movieContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const { movies, addMovies } = useContext(MovieContext);
  const imagepath = TagNames.getImagePath();

  useEffect(() => {
    const abortController = new AbortController();
    if (movies.length === 0) {
      async function fetchData(URL, { signal }) {
        // You can await here
        const { data } = await axios.get(URL);
        addMovies(data.results);
      }
      fetchData(TagNames.getURL(), abortController.signal);
      return function cleanup() {
        abortController.abort();
      };
    } else {
      console.log("data already fetched");
    }
  }, []); // Or [] if effect doesn't need props or state

  if (movies.length === 0) {
    return <h3>Movies not found.</h3>;
  }

  return (
    <div className="container">
      <div>Username: {currentUser.name}</div>
      <div className="home">
        <MoviesList movies={movies} count={movies.length} />
      </div>
    </div>
  );
};

export default Home;
