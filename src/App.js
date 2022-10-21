import { useState, useEffect } from "react";

// components
import MovieCard from "./components/MovieCard/MovieCard.js";

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch(
      "https://movierestapi-production.up.railway.app/api/movies"
    );
    const data = await res.json();
    setMovies(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default App;
