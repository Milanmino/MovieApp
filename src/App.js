import { useState, useEffect } from 'react';
import MovieList from './Components/movie-list/movie-list';
import { Routes, Route, } from "react-router-dom";
import About from './Pages/About';
import MovieDetails from './Pages/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [searchInput, setSearchInput] = useState('');


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=8e62992b5333a47ef89b8ed23072d6a0&language=en-US&page=1')
      .then(response => response.json())
      .then((apiMovies) => {
        setMovies(apiMovies);
        setShowMovies(true);
      });
  }, []);

  const searchMoviesHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search)
  }

  const filteredMovies = movies.results?.filter((movie) => {
    return movie.title.toLocaleLowerCase().includes(searchInput)
  })

  let renderMovies = 'Loading movies...';

  if (showMovies) {
    renderMovies = <MovieList movies={filteredMovies} />;
  }
  return (
    <div className="">
      <header className="header">
        <input className="search" type='search' placeholder='search movies' onChange={searchMoviesHandler} />
      </header>
      <h1 className="welcome">Welcome to MovieApp</h1>
      <Routes>
        <Route path="/" element={renderMovies} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>

    </div>
  );
}


export default App;


// import { Component } from 'react';
// import MovieList from './Components/movie-list/movie-list';

// import './App.css';



// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       movies: [],
//       showMovies: false,
//       searchInput: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://api.themoviedb.org/3/movie/popular?api_key=8e62992b5333a47ef89b8ed23072d6a0&language=en-US&page=1')
//       .then(response => response.json())
//       .then((apiMovies) =>
//         this.setState(() => {
//           return { movies: apiMovies, showMovies: true }
//         })
//       )
//   }

//   searchMoviesHandler = (event) => {
//     const search = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchInput: search };
//     })
//   }


//   render() {
//     let { showMovies, searchInput, movies } = this.state;

//     const filteredMovies = movies.results?.filter((movie) => {
//       return movie.title.toLocaleLowerCase().includes(searchInput)
//     })

//     let renderMovies = 'Loading movies...';

//     if (showMovies) {
//       renderMovies = <MovieList movies={filteredMovies} />;
//     }
//     return (
//       <div className="">
//         <h1 className="">Welcome to MovieApp</h1>
//         <div className="">
//           <input className="" type='search' placeholder='search movies' onChange={this.searchMoviesHandler} />
//         </div>

//         {renderMovies}

//         {/* <input type="text" onChange={this.changeName} value={this.state.movies[0].name} /> */}
//       </div>
//     );
//   }
// }

// export default App;
