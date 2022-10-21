import "./MovieCard.css";

const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div className="movie-card-container">
      <img src={movie.imageUrl} alt={`${movie.title} poster`} />

      <h3 className="movie-card-title">{movie.title}</h3>
      <button
        className="movie-card-details-button"
        onClick={() => onMovieClick(movie)}
      >
        DETAILS
      </button>
    </div>
  );
};
export default MovieCard;
