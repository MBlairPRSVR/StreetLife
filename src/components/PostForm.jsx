import React, { useState } from "react";

const PostForm = ({ onAddPost }) => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text && !media && !link) return;

    const newPost = {
      id: Date.now(),
      text,
      media: media ? URL.createObjectURL(media) : null,
      mediaType: media?.type.startsWith("video") ? "video" : media?.type.startsWith("image") ? "image" : null,
      link,
      reactions: {},
    };

    onAddPost(newPost);
    setText("");
    setMedia(null);
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #555",
          background: "#222",
          color: "#fff",
        }}
      />
      <div style={{ marginTop: "0.5rem" }}>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setMedia(e.target.files[0])}
          style={{ marginBottom: "0.5rem" }}
        />
        <input
          type="url"
          placeholder="YouTube or SoundCloud link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #555",
            background: "#222",
            color: "#fff",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          marginTop: "1rem",
          backgroundColor: "#ffcc00",
          color: "#000",
          fontWeight: "bold",
          padding: "0.6rem 1.2rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Post
      </button>
    </form>
  );
};

export default PostForm;
