const router = require("express").Router();
const CartController = require("../../controllers/cart.controller");
const auth = require("../../middleware/auth.middleware");

router.get("/", auth, CartController.getCart);
router.post("/", auth, CartController.addItem);
router.put("/:productId", auth, CartController.updateItem);
router.delete("/:productId", auth, CartController.removeItem);

module.exports = router;
