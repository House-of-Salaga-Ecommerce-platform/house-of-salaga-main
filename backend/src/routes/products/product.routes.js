const router = require("express").Router();
const ProductController = require("../../controllers/product.controller");

// Public product catalog
router.get("/", ProductController.getAll);
router.get("/:slug", ProductController.getBySlug);

module.exports = router;
