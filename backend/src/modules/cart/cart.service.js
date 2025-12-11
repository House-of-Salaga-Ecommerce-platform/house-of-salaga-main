const prisma = require("../../services/prisma.service");

exports.getCart = async (userId) => {
  let cart = await prisma.cart.findUnique({
    where: { userId },
    include: { items: true }
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId }
    });
  }

  return { cart };
};

exports.addItem = async (userId, { productId, qty }) => {
  const cart = await prisma.cart.findUnique({ where: { userId } });

  if (!cart) throw new Error("Cart not found");

  const item = await prisma.cartItem.create({
    data: {
      productId,
      quantity: qty,
      cartId: cart.id
    }
  });

  return { item };
};

exports.updateItem = async (userId, productId, qty) => {
  const cart = await prisma.cart.findUnique({ where: { userId } });
  if (!cart) throw new Error("Cart not found");

  const updated = await prisma.cartItem.updateMany({
    where: { cartId: cart.id, productId },
    data: { quantity: qty }
  });

  return { updated };
};

exports.removeItem = async (userId, productId) => {
  const cart = await prisma.cart.findUnique({ where: { userId } });
  if (!cart) throw new Error("Cart not found");

  await prisma.cartItem.deleteMany({
    where: { cartId: cart.id, productId }
  });

  return { success: true };
};
