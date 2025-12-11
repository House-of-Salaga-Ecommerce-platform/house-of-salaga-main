const AuthService = require("../modules/auth/auth.service");

exports.register = (req, res) =>
  AuthService.register(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ message: err.message }));

exports.login = (req, res) =>
  AuthService.login(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ message: err.message }));

exports.me = (req, res) =>
  AuthService.me(req.user.id).then((user) => res.json({ user }));
