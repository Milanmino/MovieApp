import { Link } from "react-router-dom";

const imgSource = 'https://image.tmdb.org/t/p/w500'
const MovieCard = ({ movie }) => {
    const { poster_path, title, release_date, popularity } = movie;
    return (<div className="movie">
        <img src={imgSource + poster_path} alt={title} />
        <div className="movie-title">
            <Link to={`/movies/${movie.id}`}>
                <h3>{title}</h3>
            </Link>
        </div>
        <div className="movie-info">
            <span className="release_date">{release_date}</span>
            <span className="popularity">Popularity:{popularity}</span>
        </div>

    </div>
    )
}

export default MovieCard;

