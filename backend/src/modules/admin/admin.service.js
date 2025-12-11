const prisma = require("../../services/prisma.service");

exports.createProduct = async (payload) => {
  const product = await prisma.product.create({
    data: payload
  });

  return { product };
};

exports.updateProduct = async (productId, payload) => {
  const product = await prisma.product.update({
    where: { id: productId },
    data: payload
  });

  return { product };
};

exports.createCategory = async (payload) => {
  const category = await prisma.category.create({
    data: payload
  });

  return { category };
};

exports.listUsers = async () => {
  const users = await prisma.user.findMany();
  return { users };
};

exports.updateUserRole = async (userId, role) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { role }
  });

  return { user };
};
