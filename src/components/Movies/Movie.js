import React from "react";
import { Link } from "react-router-dom";

import classes from "./Movie.module.css";

const imgSource = "https://image.tmdb.org/t/p/w300"; //imgSource is always the same

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <Link to={`${props.id}`}>
        <img src={imgSource + props.image} alt={props.title} />
        <h2>{props.title}</h2>
      </Link>
      <h3>Release Date : {props.releaseDate}</h3>
      <div className={classes.popularity}>
        <span>Popularity : {props.popularity}</span>
      </div>
    </li>
  );
};

export default Movie;
