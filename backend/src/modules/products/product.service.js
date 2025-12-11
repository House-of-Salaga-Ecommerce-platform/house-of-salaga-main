const prisma = require("../../services/prisma.service");

exports.getAll = async ({ q, page = 1, limit = 12, category }) => {
  const skip = (page - 1) * limit;

  const where = {};

  if (category) {
    where.category = { slug: category };
  }

  if (q) {
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { description: { contains: q, mode: "insensitive" } }
    ];
  }

  const items = await prisma.product.findMany({
    where,
    skip: Number(skip),
    take: Number(limit),
    orderBy: { createdAt: "desc" },
    include: { category: true }
  });

  return { items };
};

exports.getBySlug = async (slug) => {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      reviews: {
        include: { user: true }
      },
      category: true
    }
  });

  if (!product) throw new Error("Product not found");

  return { product };
};
