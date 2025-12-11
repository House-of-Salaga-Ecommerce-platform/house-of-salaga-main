const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

exports.signToken = (data) => jwt.sign(data, SECRET, { expiresIn: "7d" });
exports.verifyToken = (token) => jwt.verify(token, SECRET);
