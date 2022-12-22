import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const imgSource = 'https://image.tmdb.org/t/p/w500'
const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const params = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const result = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8e62992b5333a47ef89b8ed23072d6a0&language=en-US`)
            const data = await result.json();

            setMovie(data);
        }
        getMovie();
    }, [])
    const { poster_path, title, release_date, popularity, vote_average, overview, revenue } = movie;
    return (<div className="movie-details">
        <div className="image-details">
            <img src={imgSource + poster_path} alt={title} />
        </div>
        <div className="movie-details-info">
            <div className="movie-title">
                <h3>{title}</h3>
            </div>

            <div className="release_date">{release_date}</div>
            <div className="popularity">Popularity : {popularity}</div>

            <p className="overview">{overview}</p>
            <div className="vote_average">Vote Average : {vote_average}</div>
            <div className="revenue">Box Office : {revenue}</div>
        </div>
    </div>
    )
}

export default MovieDetails