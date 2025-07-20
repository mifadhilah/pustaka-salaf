const express = require('express');
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  getVisibleBooks,
  insertBook,
  updateBook
} = require('../controllers/books-controller');
const validateBody = require('../utils/validation');
const authenticationHandler = require('../utils/auth-handler');
const { createBookSchema, updateBookSchema } = require('../schemas/books.schema');

router.get('/all', getVisibleBooks);
router.get('/all/:bookId', getBookById);

// need to guard the routes
router.get('/', authenticationHandler, getAllBooks);
router.get('/:bookId', authenticationHandler, getBookById);
router.post('/', authenticationHandler, validateBody(createBookSchema), insertBook);
router.put('/:bookId', authenticationHandler, validateBody(updateBookSchema), updateBook);

module.exports = router;
