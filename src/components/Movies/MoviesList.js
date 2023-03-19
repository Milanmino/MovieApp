import React from "react";

import Card from "../UI/Card";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Card key={movie.id}>
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.image}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            popularity={movie.popularity}
          />
        </Card>
      ))}
    </ul>
  );
};

export default MoviesList;
