// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the action

import type { RequestHandler } from "express";
import categoryRepository from "./categoryRepository";

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const categorie = categories.find((c) => c.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};
// Export it to import it somewhere else

export default { browse, read };
