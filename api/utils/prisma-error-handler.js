export default function handlePrismaError(error) {
  if (error.code === 'P2002') {
    return {
      code: 409,
      message: 'Duplicate entry (e.g. unique constraint failed)',
    };
  }

  if (error.code === 'P2025') {
    return {
      code: 404,
      message: 'Record not found',
    };
  }

  console.error('Unhandled Prisma error:', error);
  return {
    code: 500,
    message: 'Internal server error',
  };
}
