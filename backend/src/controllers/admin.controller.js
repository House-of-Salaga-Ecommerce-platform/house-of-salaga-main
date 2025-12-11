const AdminService = require("../modules/admin/admin.service");

exports.createProduct = (req, res) =>
  AdminService.createProduct(req.body).then((data) => res.json(data));

exports.updateProduct = (req, res) =>
  AdminService.updateProduct(req.params.id, req.body)
    .then((data) => res.json(data));

exports.listUsers = (req, res) =>
  AdminService.listUsers().then((data) => res.json(data));
