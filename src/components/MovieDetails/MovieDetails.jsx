import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://moviefilter-backend-1.onrender.com/movies")
      .then((res) => {
        const foundMovie = res.data.find(
          (item) => item.id === Number(id)
        );

        setMovie(foundMovie);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movie) {
    return (
      <div className="not-found">
        Movie Not Found
      </div>
    );
  }

  return (
    <div className="movie-details-page">

      <div className="movie-details-container">

        <img
          src={movie.image}
          alt={movie.name}
          className="movie-poster"
        />

        <div className="movie-info">

          <h1 className="movie-title">
            {movie.name}
          </h1>

          <div className="movie-meta">

            <span className="meta-badge rating-badge">
              ⭐ {movie.rating}
            </span>

            <span className="meta-badge">
              📅 {movie.release_year}
            </span>

            <span className="meta-badge">
              🎭 {movie.genre}
            </span>

            <span className="meta-badge">
              🌍 {movie.country}
            </span>

            <span className="meta-badge">
              🗣️ {movie.language}
            </span>

          </div>

          <p className="movie-description">
            {movie.description}
          </p>

          <div className="movie-section">
            <h3>Cast</h3>
            <p>{movie.cast}</p>
          </div>

          <div className="movie-actions">

            <button className="movie-btn watch-btn">
              ▶ Watch Trailer
            </button>

            <Link to="/movies">
              <button className="movie-btn back-btn">
                ← Back
              </button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MovieDetails;