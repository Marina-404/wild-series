import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
      });
  }, []);

  return (
    <>
      <h1>Liste des séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>
              {program.title} {program.year}
            </h2>
            <img src={program.poster} alt={`${program.title}`} />
            <p>{program.synopsis}</p>
            <p>{program.country}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
