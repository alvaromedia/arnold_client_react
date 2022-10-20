import { useState, useEffect } from "react";

// components
import MovieCard from "./components/MovieCard";
import MovieView from "./components/MovieView";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(false);

  const fetchMovies = async () => {
    const res = await fetch(
      "https://movierestapi-production.up.railway.app/api/movies"
    );
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // set the value of 'selectedMovie' to an object
  const onMovieClick = (movieParam) => {
    console.log(movieParam);
    setSelectedMovie(movieParam);
  };

  // set the value of 'selectedMovie' back to null so the MovieView component isn't rendered
  const onBackClick = () => {
    setSelectedMovie((prevState) => !prevState);
  };

  if (!movies.length) {
    return (
      <>
        <h1>ARNOLD API</h1>
        <div className="app-container">
          <div>
            <h2>There are no available movies to display</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>ARNOLD API</h1>
      <div className="app-container">
        {selectedMovie ? (
          <MovieView selectedMovie={selectedMovie} onBackClick={onBackClick} />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={onMovieClick}
            />
          ))
        )}
      </div>
    </>
  );
};

export default App;
