const prisma = require("../../services/prisma.service");

exports.addReview = async (userId, productId, { rating, title, comment }) => {
  
  const review = await prisma.review.create({
    data: {
      userId,
      productId,
      rating,
      title,
      comment
    }
  });

  // Recalculate avg rating
  const stats = await prisma.review.aggregate({
    where: { productId },
    _avg: { rating: true },
  });

  const count = await prisma.review.count({ where: { productId } });

  await prisma.product.update({
    where: { id: productId },
    data: {
      avgRating: stats._avg.rating || 0,
      numReviews: count
    }
  });

  return { review };
};

exports.listReviews = async (productId) => {
  const reviews = await prisma.review.findMany({
    where: { productId },
    include: { user: true }
  });

  return { reviews };
};
