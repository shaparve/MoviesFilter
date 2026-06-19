import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="nav">
      <h2>🎬 MovieFlix</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/about">About</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;