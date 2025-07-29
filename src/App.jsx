import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import ArtistSpotlight from "./pages/ArtistSpotlight";
import backgroundImage from "./images/streetlifehome.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        fontFamily: "'Arial Black', Arial, sans-serif",
        backgroundColor: "#000",
        color: "#ffcc00",
      }}
    >
      <nav
        style={{
          padding: "1rem 2rem",
          borderBottom: "3px solid #ffcc00",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // optional: add overlay for nav readability
        }}
      >
        <h1 style={{ fontWeight: "900", fontSize: "1.5rem" }}>StreetLife</h1>
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#ffcc00",
              marginRight: "1rem",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/artist-spotlight"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#ffcc00",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Artist Spotlight
          </NavLink>
        </div>
      </nav>

      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist-spotlight" element={<ArtistSpotlight />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
