import { Suspense, useEffect, useState } from "react";

import { Await, useSearchParams } from "react-router-dom";

import PageContent from "../components/Layout/PageContent";
import Pagination from "../components/Layout/Pagination";
import MoviesList from "../components/Movies/MoviesList";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState();

  const [searchParams] = useSearchParams();
  // parse the "page" parameter from the search params and set it as the current page
  const currentPage = parseInt(searchParams.get("page"), 10);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=8e62992b5333a47ef89b8ed23072d6a0&language=en-US&page=${page}`
      ); //dynamically fetching the data
      const data = await response.json();
      const trasformedMovies = data.results.map((movieData) => {
        // data returns as an array of objects so you have to itterate over every one
        return {
          image: movieData.poster_path,
          id: movieData.id,
          title: movieData.title,
          openingText: movieData.overview,
          releaseDate: movieData.release_date,
          popularity: movieData.popularity,
        };
      });
      setMovies(trasformedMovies);
    }
    fetchMovies();
  }, [page]);

  function handlePageChange(newPage) {
    //getting the page from Pagination component
    setPage(newPage);
  }

  return (
    <>
      <PageContent title="Most Popular Movies">
        <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={movies}>
            {(loadedMovies) => <MoviesList movies={loadedMovies} />}
          </Await>
        </Suspense>
        <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
      </PageContent>
    </>
  );
}

export default MoviesPage;
