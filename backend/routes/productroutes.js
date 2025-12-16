import express from "express";
import { getProduct, addReview } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/:id", getProduct);
router.post("/add-review", addReview);

export default router;
