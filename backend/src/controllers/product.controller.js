const ProductService = require("../modules/products/product.service");

exports.getAll = (req, res) =>
  ProductService.getAll(req.query).then((data) => res.json(data));

exports.getBySlug = (req, res) =>
  ProductService.getBySlug(req.params.slug).then((data) => res.json(data));
