import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "#222", padding: "1rem", display: "flex", gap: "2rem", justifyContent: "center", fontFamily: "'Arial Black', Gadget, sans-serif" }}>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({
          color: isActive ? "#ff00ff" : "#fff", 
          textDecoration: isActive ? "underline" : "none",
          fontWeight: "bold",
          fontSize: "1.2rem",
          textShadow: "1px 1px 2px #000"
        })}
      >
        Home
      </NavLink>
      <NavLink 
        to="/artist-spotlight" 
        style={({ isActive }) => ({
          color: isActive ? "#ff00ff" : "#fff",
          textDecoration: isActive ? "underline" : "none",
          fontWeight: "bold",
          fontSize: "1.2rem",
          textShadow: "1px 1px 2px #000"
        })}
      >
        Artist Spotlight
      </NavLink>
    </nav>
  );
};

export default NavBar;
