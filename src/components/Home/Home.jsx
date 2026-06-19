import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [groupedMovies, setGroupedMovies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await axios.get(
        "https://moviefilter-backend-1.onrender.com/movies"
      );

      const movies = res.data;

      const grouped = movies.reduce(
        (acc, movie) => {
          const genre =
            movie.genre || "Others";

          if (!acc[genre]) {
            acc[genre] = [];
          }

          acc[genre].push(movie);

          return acc;
        },
        {}
      );

      setGroupedMovies(grouped);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home-page">

      <div className="hero">
        <h1>🎬 MovieFlix</h1>
        <p>
          Explore Movies By Genre
        </p>
      </div>

      {Object.keys(groupedMovies).map(
        (genre) => (
          <div
            className="genre-section"
            key={genre}
          >
            <h2>{genre}</h2>

            <div className="movie-row">

              {groupedMovies[
                genre
              ].map((movie) => (
                <div
                  className="movie-card"
                  key={movie.id}
                >
                  <img
                    src={movie.image}
                    alt={movie.name}
                  />

                  <h4>
                    {movie.name}
                  </h4>

                  <p>
                    ⭐ {movie.rating}
                  </p>

                  <p>
                    🌍 {movie.country}
                  </p>

                  <Link
                    to={`/movie/${movie.id}`}
                  >
                    <button>
                      View
                    </button>
                  </Link>

                </div>
              ))}

            </div>
          </div>
        )
      )}

    </div>
  );
}

export default Home;