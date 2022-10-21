import { useState, useEffect } from "react";

// components
import MovieCard from "./components/MovieCard/MovieCard.js";
import MovieView from "./components/MovieView/MovieView.js";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

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
        <span>Loading</span>
        <img
          style={{ width: "30px", marginLeft: "1rem" }}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
          alt="spinner"
        />
      </>
    );
  }

  return (
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
  );
};

export default App;
