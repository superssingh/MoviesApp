import React from "react";
import * as TagNames from "../js/constants/constants";
import { Link } from "react-router-dom";
const MoviesList = (props) => {
  const { movies, count, img_tag, title_tag } = props;
  const poster_size = `?w=162&auto=format`;
  const getMoviePath = (id) => {
    return "/movie/" + id;
  };

  return (
    <div>
      <p>{count} movies found.</p>
      <div className="flexbox-container">
        {movies.map((item) => (
          <div key={item.id} className="flexbox-item ">
            <Link className="movieButton" to={getMoviePath(item.id)} {...props}>
              <img
                className="image"
                src={TagNames.getImagePath(item[img_tag]) + poster_size}
                srcSet={TagNames.getImagePath(item[img_tag]) + poster_size}
                alt={item[title_tag]}
                loading="lazy"
              ></img>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

MoviesList.defaultProps = {
  img_tag: "poster_path",
  title_tag: "title",
};

export default MoviesList;
