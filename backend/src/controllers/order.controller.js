const OrderService = require("../modules/orders/order.service");

exports.createOrder = (req, res) =>
  OrderService.createOrder(req.user.id, req.body)
    .then((data) => res.json(data));

exports.getOrders = (req, res) =>
  OrderService.getOrders(req.user)
    .then((data) => res.json(data));
