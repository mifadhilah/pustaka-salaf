const model = require("../models/books.model");
const handlePrismaError = require("../utils/prisma-error-handler");

// Get all books who flagged as visible, for public viewing
const getVisibleBooks = async (req, res) => {
  try {
    const result = await model.getBooks({ isVisible: true });

    res.json({
      code: 200,
      message: "Books list successfully fetched",
      data: result,
      success: true
    });
  } catch(err) {
    const { code, message } = handlePrismaError(err);

    return res.status(code).json({ success: false, code, message });
  }
};

// Get all books include the not active/not visible book
const getAllBooks = async (req, res) => {
  try {
    const result = await model.getBooks();

    res.json({
      code: 200,
      message: "Books list successfully fetched",
      data: result,
      success: true
    });
  } catch(err) {
    const { code, message } = handlePrismaError(err);

    return res.status(code).json({ success: false, code, message });
  }
};

const getBookById = async (req, res) => {
  const { isAuthenticated } = req;
  const { id: bookId, isVisible } = req.params;

  try {
    const result = await model.getBooks({
      bookId,
      isVisible: isAuthenticated ? isVisible : true
    });

    res.json({
      code: 200,
      message: "Book successfully fetched",
      data: result,
      success: true
    });
  } catch(err) {
    const { code, message } = handlePrismaError(err);

    return res.status(code).json({ success: false, code, message });
  }
};

// Insert a new book
const insertBook = async (req, res) => {
  try {
    const result = await model.postBook(req.body);

    res.json({
      code: 200,
      message: "Book successfully added",
      data: result,
      success: true
    });
  } catch(err) {
    const { code, message } = handlePrismaError(err);

    return res.status(code).json({ success: false, code, message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  const { bookId } = req.params;

  try {
    const result = await model.putBook(bookId, req.body);

    res.json({
      code: 200,
      message: "Book successfully updated",
      data: result,
      success: true
    });
  } catch(err) {
    const { code, message } = handlePrismaError(err);

    return res.status(code).json({ success: false, code, message });
  }
};

// Delete a book
// app.delete("/books/:id", async (req, res) => {
//   const { id } = req.params;

//   const { error } = await supabase.from("books").delete().eq("id", id);
//   if (error) return res.status(500).json({ error: error.message });

//   res.json({ success: true });
// });

module.exports = {
  getVisibleBooks,
  getAllBooks,
  getBookById,
  insertBook,
  updateBook
};
