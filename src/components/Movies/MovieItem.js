import React from "react";

import PageContent from "../Layout/PageContent";
import classes from "./MovieItem.module.css";

const imgSource = "https://image.tmdb.org/t/p/w500";

const MovieItem = (props) => {
  const { genres } = props.movie;

  return (
    <PageContent title={props.movie.title}>
      <article className={classes.movie}>
        <img
          src={imgSource + props.movie.poster_path}
          alt={props.movie.title}
        />
        <div className={classes.info}>
          <h3>Release Date : {props.movie.release_date}</h3>
          <span>Popularity : {props.movie.popularity}</span>
          <br />
          <ul className={classes.genres}>
            {genres.map((genre) => (
              <li key={genre.id}> {genre.name} </li>
            ))}
          </ul>
          <p>{props.movie.overview}</p>
        </div>
      </article>
    </PageContent>
  );
};

export default MovieItem;
