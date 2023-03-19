import { Suspense } from "react";
import { useRouteLoaderData, json, defer, Await } from "react-router-dom";

import MovieItem from "../components/Movies/MovieItem";

function MovieDetailsPage() {
  const { movie } = useRouteLoaderData("movie-detail");

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={movie}>
        {(loadedMovie) => <MovieItem movie={loadedMovie} />}
      </Await>
    </Suspense>
  );
}

export default MovieDetailsPage;

async function loadMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8e62992b5333a47ef89b8ed23072d6a0&language=en-US`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected movie!" },
      { status: 500 }
    );
  }
  const resData = await response.json();

  return resData;
}

export async function movieDetailsLoader({ params }) {
  const id = params.id;

  return defer({
    movie: await loadMovie(id), //this "await" tells react which data should be awaited before rendering the page
  });
}
