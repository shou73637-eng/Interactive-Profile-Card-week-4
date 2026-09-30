import { useState } from "react";

function Card({ nama, profesi, deskripsi, skills, warna }) {
  // State: jumlah like, dimulai dari 0
  const [likes, setLikes] = useState(0);

  // Ambil huruf pertama nama sebagai avatar
  const inisial = nama.charAt(0).toUpperCase();

  return (
    <article className="card" style={{ "--accent": warna }}>
      <div className="card-banner"></div>

      <div className="card-body">
        <div className="avatar">{inisial}</div>
        <h2>{nama}</h2>
        <p className="profesi">{profesi}</p>
        <p className="deskripsi">{deskripsi}</p>

        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <button
          className={likes > 0 ? "like-btn liked" : "like-btn"}
          onClick={() => setLikes(likes + 1)}
        >
          <span className="heart" key={likes}>
            {likes > 0 ? "❤️" : "🤍"}
          </span>
          {likes === 0 ? "Beri like" : `${likes} like`}
        </button>
      </div>
    </article>
  );
}

export default Card;

