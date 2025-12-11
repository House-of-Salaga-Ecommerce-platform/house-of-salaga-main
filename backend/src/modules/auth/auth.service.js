const prisma = require("../../services/prisma.service");
const bcrypt = require("bcryptjs");
const { signToken } = require("../../services/jwt.service");

exports.register = async ({ name, email, password }) => {
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw new Error("Email already registered");

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, passwordHash },
  });

  const token = signToken({ id: user.id, role: user.role });
  return { token, user };
};

exports.login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throw new Error("Invalid credentials");

  const token = signToken({ id: user.id, role: user.role });
  return { token, user };
};

exports.me = (id) =>
  prisma.user.findUnique({ where: { id } });
