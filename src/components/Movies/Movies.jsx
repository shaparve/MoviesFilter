import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [favorites, setFavorites] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  useEffect(() => {
    axios
      .get("https://moviefilter-backend-1.onrender.com/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addFav = (movie) => {
    const alreadyAdded = favorites.find(
      (item) => item.id === movie.id
    );

    if (alreadyAdded) {
      const updated = favorites.filter(
        (item) => item.id !== movie.id
      );

      setFavorites(updated);
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  let filtered = movies.filter((movie) => {
    const text = search.toLowerCase();

    const matchSearch =
      movie.name.toLowerCase().includes(text) ||
      movie.genre.toLowerCase().includes(text) ||
      movie.country.toLowerCase().includes(text) ||
      movie.language.toLowerCase().includes(text) ||
      movie.cast.toLowerCase().includes(text) ||
      movie.description.toLowerCase().includes(text) ||
      movie.release_year.toString().includes(text) ||
      movie.rating.toString().includes(text);

    const matchGenre =
      genre === "" || movie.genre === genre;

    const matchCountry =
      country === "" || movie.country === country;

    return matchSearch && matchGenre && matchCountry;
  });

  const totalPages = Math.ceil(
    filtered.length / moviesPerPage
  );

  const start = (currentPage - 1) * moviesPerPage;
  const end = start + moviesPerPage;

  const paginatedMovies = filtered.slice(
    start,
    end
  );

  return (
    <div className="movies-page">

      <h1 className="heading">
        🎬 Movie Collection
      </h1>

      <div className="top-filters">

        <input
          type="text"
          placeholder="Search by name, actor, genre..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={genre}
          onChange={(e) =>
            setGenre(e.target.value)
          }
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Crime">Crime</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Animation">Animation</option>
          <option value="Thriller">Thriller</option>
          <option value="War">War</option>
        </select>

        <select
          value={country}
          onChange={(e) =>
            setCountry(e.target.value)
          }
        >
          <option value="">All Countries</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="France">France</option>
          <option value="Japan">Japan</option>
          <option value="South Korea">
            South Korea
          </option>
        </select>

      </div>

      <div className="movies-grid">

        {paginatedMovies.map((movie) => (
          <div
            className="card"
            key={movie.id}
          >

            <img
              src={movie.image}
              alt={movie.name}
            />

            <h3>{movie.name}</h3>

            <p>⭐ {movie.rating}</p>
            <p>🎭 {movie.genre}</p>
            <p>🌍 {movie.country}</p>

            <div className="card-buttons">

              <button
                onClick={() =>
                  addFav(movie)
                }
                className={
                  favorites.find(
                    (item) =>
                      item.id === movie.id
                  )
                    ? "added-btn"
                    : "fav-btn"
                }
              >
                {favorites.find(
                  (item) =>
                    item.id === movie.id
                )
                  ? "✅ Added"
                  : "❤️ Favorite"}
              </button>

              <Link
                to={`/movie/${movie.id}`}
              >
                <button className="view-btn">
                  View
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>

      <div className="pagination">

        <button
          disabled={
            currentPage === 1
          }
          onClick={() =>
            setCurrentPage(
              currentPage - 1
            )
          }
        >
          Prev
        </button>

        <span>
          Page {currentPage} of{" "}
          {totalPages}
        </span>

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(
              currentPage + 1
            )
          }
        >
          Next
        </button>

      </div>

      <div className="favorites">

        <h2>
          ❤️ Favorites (
          {favorites.length})
        </h2>

        <div className="fav-grid">

          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="fav-card"
            >
              {movie.name}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Movies;