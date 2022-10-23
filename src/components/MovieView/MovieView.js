import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieView.css";

// modal
import Modal from "../../Modal";

const MovieView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [modal, showModal] = useState(false);

  const handleModal = () => {
    showModal((prevState) => !prevState);
  };

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
      <div className="movie-view">
        <div className="image">
          <img src={movie.imageUrl} alt={`${movie.title} poster`} />
        </div>

        <div className="info">
          <div className="title">
            <h1>Title</h1>
            <span>{movie.title}</span>
          </div>
          <div className="director">
            <h3>Director</h3>
            <span onClick={handleModal}>{movie.director.name}</span>
          </div>
          <div className="genre">
            <h3>Genre</h3>
            <span>{movie.genre.name}</span>
          </div>
        </div>

        <div className="description">
          <h1>Description</h1>
          <span>{movie.description}</span>
        </div>

        {modal ? (
          <Modal>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <h1>{movie.director.name}</h1>

              <h2>Birth - {new Date(movie.director.birth).toDateString()}</h2>
              <h2>
                Death -{" "}
                {movie.director.deatch
                  ? new Date(movie.director.death).toDateString()
                  : ""}
              </h2>
              <h2>Bio</h2>
              <h3>{movie.director.bio}</h3>

              <button onClick={handleModal}>Close</button>
            </div>
          </Modal>
        ) : null}
      </div>
    )
  );
};

export default MovieView;
