const prisma = require("../../services/prisma.service");

exports.createOrder = async (userId, data) => {
  const { items, subtotal, shippingFee, total, shippingAddress, payment } = data;

  const order = await prisma.order.create({
    data: {
      userId,
      items: {
        create: items.map(item => ({
          productId: item.productId,
          quantity: item.qty,
          price: item.price
        }))
      },
      subtotal,
      shippingFee,
      total,
      shippingAddress,
      payment
    },
    include: { items: true }
  });

  return { order };
};

exports.getOrders = async (user) => {
  if (user.role === "admin") {
    const orders = await prisma.order.findMany({
      include: { items: true, user: true }
    });
    return { orders };
  }

  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: { items: true }
  });

  return { orders };
};

exports.updateStatus = async (orderId, status) => {
  const updated = await prisma.order.update({
    where: { id: orderId },
    data: { status }
  });

  return { updated };
};
