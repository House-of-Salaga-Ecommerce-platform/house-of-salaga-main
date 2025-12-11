const router = require("express").Router();
const OrderController = require("../../controllers/order.controller");
const auth = require("../../middleware/auth.middleware");
const admin = require("../../middleware/admin.middleware");

// Customer
router.post("/", auth, OrderController.createOrder);
router.get("/", auth, OrderController.getOrders);

// Admin update order status
router.put("/:id/status", auth, admin, OrderController.updateStatus);

module.exports = router;
