const router = require("express").Router();
const WishlistController = require("../../controllers/wishlist.controller");
const auth = require("../../middleware/auth.middleware");

router.get("/", auth, WishlistController.getWishlist);
router.post("/:productId", auth, WishlistController.toggle);

module.exports = router;
