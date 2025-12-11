const router = require("express").Router();
const AuthController = require("../../controllers/auth.controller");
const auth = require("../../middleware/auth.middleware");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/me", auth, AuthController.me);

module.exports = router;
