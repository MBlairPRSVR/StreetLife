import React, { useState } from "react";
import PostForm from "./PostForm"; // ✅ Relative path correct?


const Feed = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <>
      <PostForm onAddPost={addPost} />
      {posts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa" }}>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "2rem", borderBottom: "1px solid #444", paddingBottom: "1rem" }}>
            {post.text && <p>{post.text}</p>}
            {post.media && post.mediaType === "image" && (
              <img src={post.media} alt="user upload" style={{ maxWidth: "100%", borderRadius: "8px" }} />
            )}
            {post.media && post.mediaType === "video" && (
              <video controls style={{ maxWidth: "100%", borderRadius: "8px" }}>
                <source src={post.media} />
              </video>
            )}
            {post.link && (
              <iframe
                width="100%"
                height="200"
                src={post.link.replace("watch?v=", "embed/")}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Media link"
                style={{ borderRadius: "8px", marginTop: "0.5rem" }}
              />
            )}
          </div>
        ))
      )}
    </>
  );
};

export default Feed;
