import React from "react";
import Feed from "../components/Feed";

const MusicMediaGroup = () => {
  return (
    <section
      style={{
        padding: "2rem 1rem",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        color: "#fff",
        borderRadius: "12px",
        border: "1px solid #333",
        backdropFilter: "blur(8px)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "1.8rem" }}>
        🎶 Music Media Group
      </h2>
      <Feed />
    </section>
  );
};

export default MusicMediaGroup;
