const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

exports.Prisma = Prisma;

module.exports = prisma;
