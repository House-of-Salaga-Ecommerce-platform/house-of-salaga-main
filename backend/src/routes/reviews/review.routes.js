const router = require("express").Router();
const ReviewController = require("../../controllers/review.controller");
const auth = require("../../middleware/auth.middleware");

// Add review
router.post("/:productId", auth, ReviewController.addReview);

// Get reviews for a product
router.get("/product/:productId", ReviewController.listReviews);

module.exports = router;
