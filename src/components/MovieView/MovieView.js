import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieView.css";

const MovieView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const fetchMovie = async () => {
    const res = await fetch(
      `https://movierestapi-production.up.railway.app/api/movies/${id}`
    );
    const data = await res.json();

    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    movie && (
      <div className="movie-view-container">
        <div className="movie-view-image-container">
          <img src={movie.imageUrl} alt={`${movie.title} poster`} />
        </div>

        <div className="movie-view-info-container">
          <div className="title-container">
            <h1>Title</h1>
            <span>{movie.title}</span>
          </div>
          <div className="director-container">
            <h3>Director</h3>
            <span>{movie.director.name}</span>
          </div>
          <div className="genre-container">
            <h3>Genre</h3>
            <span>{movie.genre.name}</span>
          </div>
        </div>

        <div className="movie-view-description-container">
          <h1>Description</h1>
          <span>{movie.description}</span>
        </div>
      </div>
    )
  );
};

export default MovieView;
