const MovieView = ({ selectedMovie, onBackClick }) => {
  return (
    <div className="movie-view-container">
      <div className="movie-view-image-container">
        <img
          src={selectedMovie.imageUrl}
          alt={`${selectedMovie.title} poster`}
        />
      </div>

      {/* info */}
      <div className="movie-view-info-container">
        <div className="title-container">
          <h1>Title</h1>
          <span>{selectedMovie.title}</span>
        </div>
        <div className="director-container">
          <h3>Director</h3>
          <span>{selectedMovie.director.name}</span>
        </div>
        <div className="genre-container">
          <h3>Genre</h3>
          <span>{selectedMovie.genre.name}</span>
        </div>
      </div>

      {/* description */}
      <div className="movie-view-description-container">
        <h1>Description</h1>
        <span>{selectedMovie.description}</span>
      </div>

      {/* back button */}
      <button onClick={onBackClick}>Go back</button>
    </div>
  );
};

export default MovieView;
