import React from "react";

const Post = ({ data }) => {
  return (
    <div style={{ background: "#222", padding: "1rem", borderRadius: "10px", marginBottom: "1.5rem" }}>
      <p>{data.text}</p>

      {data.image && (
        <img src={URL.createObjectURL(data.image)} alt="Post" style={{ width: "100%", marginTop: "1rem" }} />
      )}

      {data.videoUrl && (
        <div style={{ marginTop: "1rem" }}>
          <iframe
            width="100%"
            height="315"
            src={data.videoUrl}
            title="Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <small style={{ color: "#aaa" }}>{new Date(data.createdAt).toLocaleString()}</small>
    </div>
  );
};

export default Post;
