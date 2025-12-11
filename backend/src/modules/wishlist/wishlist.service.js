const prisma = require("../../services/prisma.service");

exports.getWishlist = async (userId) => {
  let wishlist = await prisma.wishlist.findUnique({ where: { userId } });

  if (!wishlist) {
    wishlist = await prisma.wishlist.create({
      data: { userId, productIds: [] }
    });
  }

  return { wishlist };
};

exports.toggle = async (userId, productId) => {
  let wishlist = await prisma.wishlist.findUnique({ where: { userId } });

  if (!wishlist) {
    wishlist = await prisma.wishlist.create({
      data: { userId, productIds: [] }
    });
  }

  const items = wishlist.productIds;
  const exists = items.includes(productId);

  if (exists) {
    wishlist = await prisma.wishlist.update({
      where: { id: wishlist.id },
      data: { productIds: items.filter(id => id !== productId) }
    });
  } else {
    wishlist = await prisma.wishlist.update({
      where: { id: wishlist.id },
      data: { productIds: [...items, productId] }
    });
  }

  return { wishlist };
};
