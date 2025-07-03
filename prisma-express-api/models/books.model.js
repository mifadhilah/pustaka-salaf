const prisma = require('../config/prisma');

const postBook = async (payload) => {
  const book = await prisma.book.create({
    data: payload,
  });

  return book;
};

const getBooks = async ({ bookId, isVisible, page = 1 } = {}) => {
  let books;

  if (bookId) {
    books = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
      include: {
        category: true,
        author: true,
        book_tags: true,
        publisher: true
      }
    });
  } else {
    books = await prisma.book.findMany({
      where: {
        is_visible: isVisible
      },
      orderBy: {
        created_at: "desc"
      },
      skip: (+page - 1) * 10,
      take: 10
    });
  }

  return books;
};

const putBook = async (bookId, payload) => {
  const book = await prisma.book.update({
    where: {
      id: bookId
    },
    data: payload,
  });

  return book;
};

// exports.put = async (id, updatedData) => {
//   const book = await prisma.book.update({
//     where: { id },
//     data: updatedData,
//   });
//   return book;
// };

// exports.delete = async (id) => {
//   const book = await prisma.book.delete({
//     where: { id },
//   });
//   return book;
// };

module.exports = { getBooks, postBook, putBook };
