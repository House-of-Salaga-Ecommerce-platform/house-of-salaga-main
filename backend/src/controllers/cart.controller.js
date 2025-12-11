const CartService = require("../modules/cart/cart.service");

exports.getCart = (req, res) =>
  CartService.getCart(req.user.id).then((data) => res.json(data));

exports.addItem = (req, res) =>
  CartService.addItem(req.user.id, req.body).then((data) =>
    res.json(data)
  );

exports.updateItem = (req, res) =>
  CartService.updateItem(req.user.id, req.params.productId, req.body.qty)
    .then((data) => res.json(data));

exports.removeItem = (req, res) =>
  CartService.removeItem(req.user.id, req.params.productId)
    .then((data) => res.json(data));
