const router = require("express").Router();
const AdminController = require("../../controllers/admin.controller");
const auth = require("../../middleware/auth.middleware");
const admin = require("../../middleware/admin.middleware");

// Product Management
router.post("/products", auth, admin, AdminController.createProduct);
router.put("/products/:id", auth, admin, AdminController.updateProduct);

// Category Management
router.post("/categories", auth, admin, AdminController.createCategory);

// User Management
router.get("/users", auth, admin, AdminController.listUsers);
router.put("/users/:id/role", auth, admin, AdminController.updateUserRole);

module.exports = router;
