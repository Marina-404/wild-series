import express from "express";
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);
import categoryActions from "./modules/item/category/categoryActions";
/* ************************************************************************* */
import programActions from "./modules/item/program/programActions";

router.get("/api/programs", programActions.browse);

export default router;
