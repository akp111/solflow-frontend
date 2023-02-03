import react from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">🤖SolFlow🤖</div>
      <div className="navbar-links">
        <a href="/dashboard">
          <button className="navbar-link navbar-link-button">
            Lets go 🔥🔥
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
