const WishlistService = require("../modules/wishlist/wishlist.service");

exports.getWishlist = (req, res) =>
  WishlistService.getWishlist(req.user.id).then((data) => res.json(data));

exports.toggle = (req, res) =>
  WishlistService.toggle(req.user.id, req.params.productId)
    .then((data) => res.json(data));
