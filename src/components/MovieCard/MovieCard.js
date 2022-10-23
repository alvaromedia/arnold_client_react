import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={`${movie.title} poster`} />

      <h3 className="title">{movie.title}</h3>
      <Link to={`/movies/${movie._id}`}>
        <button className="details-button">DETAILS</button>
      </Link>
    </div>
  );
};
export default MovieCard;
