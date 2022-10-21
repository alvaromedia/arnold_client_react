import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card-container">
      <img src={movie.imageUrl} alt={`${movie.title} poster`} />

      <h3 className="movie-card-title">{movie.title}</h3>
      <Link to={`/movies/${movie._id}`}>
        <button className="movie-card-details-button">DETAILS</button>
      </Link>
    </div>
  );
};
export default MovieCard;
