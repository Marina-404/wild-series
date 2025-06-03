import { useEffect, useState } from "react";

type Catégories = {
  id: number;
  name: string;
};

export default function Categories() {
  const [categories, setCategories] = useState<Catégories[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      <h1>Les Catégories</h1>
      <ul>
        {categories.map((categorie) => (
          <li key={categorie.id}>
            <p>{categorie.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
