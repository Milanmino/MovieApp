import MovieCard from "../movie-card/movie-card";

const MovieList = ({ movies }) => {
    return (
        <div className="movie-container">
            {movies.map((movie) => {
                return (<MovieCard movie={movie} key={movie.id} />);
            })}
        </div>)
}

export default MovieList;