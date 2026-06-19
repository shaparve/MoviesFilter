import "./index.css";

function About() {
  return (
    <div className="about-page">

      <div className="about-hero">
        <h1>🎬 About MovieFlix</h1>
        <p>
          Discover, explore and enjoy the greatest
          movies from around the world.
        </p>
      </div>

      <div className="about-container">

        <section className="about-card">
          <h2>📌 What is MovieFlix?</h2>
          <p>
            MovieFlix is a modern full stack movie
            browsing platform built using React,
            Node.js and SQLite database.
          </p>

          <p>
            It allows users to explore top-rated
            movies, search titles, filter by genre,
            country, language and sort by rating
            or release year.
          </p>
        </section>

        <section className="about-card">
          <h2>🎞️ Huge Movie Collection</h2>

          <p>
            Our collection includes:
          </p>

          <ul>
            <li>Hollywood Blockbusters</li>
            <li>Classic Masterpieces</li>
            <li>Action Movies</li>
            <li>Drama Films</li>
            <li>Crime Thrillers</li>
            <li>Fantasy Adventures</li>
            <li>Animation & Family Movies</li>
            <li>International Cinema</li>
          </ul>
        </section>

        <section className="about-card">
          <h2>⭐ Features</h2>

          <ul>
            <li>Search Movies Instantly</li>
            <li>Genre Based Home Page</li>
            <li>Favorites / Wishlist</li>
            <li>Sort by Rating / Year</li>
            <li>Responsive Design</li>
            <li>Dark Theme UI</li>
            <li>Fast API Integration</li>
          </ul>
        </section>

        <section className="about-card">
          <h2>🎥 Why Movies Matter</h2>

          <p>
            Movies inspire people, tell stories,
            create emotions and connect cultures.
            They entertain, educate and leave
            unforgettable memories.
          </p>

          <p>
            From classics like The Godfather to
            modern hits like Interstellar,
            cinema continues to shape the world.
          </p>
        </section>

        <section className="about-card">
          <h2>💻 Technologies Used</h2>

          <ul>
            <li>React JS Frontend</li>
            <li>Node JS Backend</li>
            <li>Express API</li>
            <li>SQLite Database</li>
            <li>Axios API Calls</li>
            <li>React Router DOM</li>
          </ul>
        </section>

      </div>

    </div>
  );
}

export default About;