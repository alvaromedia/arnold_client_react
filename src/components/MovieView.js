const MovieView = ({ selectedMovie, onBackClick }) => {
  return (
    <>
      <div className="image-container">
        <img
          src={selectedMovie.imageUrl}
          alt={`${selectedMovie.title} poster`}
        />
      </div>

      <div className="title-container">
        <h1>Title: </h1>
        <span>{selectedMovie.title}</span>
      </div>

      <div className="description-container">
        <h1>Description:</h1>
        <span>{selectedMovie.description}</span>
      </div>

      <button onClick={onBackClick}>Go back</button>
    </>
  );
};

export default MovieView;
