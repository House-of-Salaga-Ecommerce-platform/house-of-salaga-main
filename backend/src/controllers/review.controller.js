const ReviewService = require("../modules/reviews/review.service");

exports.addReview = (req, res) =>
  ReviewService.addReview(req.user.id, req.params.productId, req.body)
    .then((data) => res.json(data));

exports.listReviews = (req, res) =>
  ReviewService.listReviews(req.params.productId)
    .then((data) => res.json(data));
