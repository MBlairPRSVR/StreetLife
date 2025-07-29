import React, { useState } from "react";

export default function ArtistSpotlight() {
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [songFile, setSongFile] = useState(null);
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    youtube: "",
    instagram: "",
  });
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSongChange = (e) => {
    const file = e.target.files[0];
    if (file) setSongFile(file);
  };

  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Artist spotlight profile submitted!");
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20, color: "#ffcc00", fontFamily: "'Arial Black', Arial, sans-serif" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "0.3rem" }}>Artist Spotlight Submission</h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", fontWeight: "normal", color: "#ffeb99" }}>
        Upload your profile image, song, social links, bio, and email to be featured.
      </p>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginTop: 15, fontWeight: "bold" }}>
          Profile Image (required):
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </label>
        {profileImagePreview && (
          <img
            src={profileImagePreview}
            alt="Profile Preview"
            style={{ marginTop: 10, width: 150, height: 150, borderRadius: "50%", objectFit: "cover" }}
          />
        )}

        <label style={{ display: "block", marginTop: 15, fontWeight: "bold" }}>
          Upload Song (MP3 or WAV, required):
          <input type="file" accept="audio/*" onChange={handleSongChange} required />
        </label>
        {songFile && <p>Selected: {songFile.name}</p>}

        <label style={{ display: "block", marginTop: 15, fontWeight: "bold" }}>
          Facebook:
          <input
            type="url"
            name="facebook"
            placeholder="https://facebook.com/yourpage"
            value={socialLinks.facebook}
            onChange={handleSocialLinkChange}
            style={{ width: "100%", marginTop: 5, padding: 8 }}
          />
        </label>
        <label style={{ display: "block", marginTop: 15, fontWeight: "bold" }}>
          YouTube:
          <input
            type="url"
            name="youtube"
            placeholder="https://youtube.com/channel/yourchannel"
            value={socialLinks.youtube}
            onChange={handleSocialLinkChange}
            style={{ width: "100%", marginTop: 5, padding: 8 }}
          />
        </label>
        <label style={{ display: "block", marginTop: 15, fontWeight: "bold" }}>
          Instagram:
          <input
            type="url"
            name="instagram"
            placeholder="https://instagram.com/yourprofile"
            value={socialLinks.instagram}
            onChange={handleSocialLinkChange}
            style={{ width: "100%", marginTop: 5, padding: 8 }}
          />
        </label>

        <label style={{ display: "block", marginTop: 15, fontWeight: "bold" }}>
          Short Bio (required):
          <textarea
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself"
            required
            style={{ width: "100%", marginTop: 5, padding: 8 }}
          />
        </label>

        <label style={{ display: "block", marginTop: 15, fontWeight: "bold" }}>
          Email (required):
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            style={{ width: "100%", marginTop: 5, padding: 8 }}
          />
        </label>

        <button
          type="submit"
          style={{
            marginTop: 20,
            padding: "12px 20px",
            backgroundColor: "#ffcc00",
            border: "none",
            borderRadius: 6,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit Profile
        </button>
      </form>
    </div>
  );
}
