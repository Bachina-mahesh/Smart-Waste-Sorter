import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2 className="logo">🌿 Smart Waste Sorter</h2>
      <ul>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("features")}>Features</li>
        <li onClick={() => setPage("team")}>Team</li>
        <li onClick={() => setPage("contact")}>Contact</li>
      </ul>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(6px);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #a5d6a7;
        }
        .navbar ul {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        .navbar li {
          cursor: pointer;
          transition: color 0.3s;
        }
        .navbar li:hover {
          color: #66bb6a;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
