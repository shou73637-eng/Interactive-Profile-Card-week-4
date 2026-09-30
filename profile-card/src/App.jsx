import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

// Data tiap kartu
const profiles = [
  {
    nama: "Gustian Indeka Yulianto",
    profesi: "Mahasiswa Informatika",
    deskripsi: "Sedang belajar React dan membangun proyek web pertamaku.",
    skills: ["React", "JavaScript", "Git"],
    warna: "#e4572e",
  },
  {
    nama: "Gustian Indeka Yulianto",
    profesi: "Frontend Developer",
    deskripsi: "Suka membangun antarmuka yang cepat dan interaktif.",
    skills: ["HTML", "CSS", "Vite"],
    warna: "#2a9d8f",
  },
  {
    nama: "Gustian Indeka Yulianto",
    profesi: "UI/UX Designer",
    deskripsi: "Fokus pada pengalaman pengguna yang sederhana dan jelas.",
    skills: ["Figma", "Riset", "Prototype"],
    warna: "#6a4c93",
  },
];

function App() {
  return (
    <>
      <Header
        title="Interactive Profile Card"
        subtitle="Tugas Individu Week 4 - React Fundamental"
      />
      <main className="card-list">
        {profiles.map((p) => (
          <Card
            key={p.nama}
            nama={p.nama}
            profesi={p.profesi}
            deskripsi={p.deskripsi}
            skills={p.skills}
            warna={p.warna}
          />
        ))}
      </main>
    </>
  );
}

export default App;

