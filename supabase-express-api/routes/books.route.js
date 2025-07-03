const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books-controller');

router.get('/', booksController.getVisibleBooks);
router.get('/all', booksController.getAllBooks);
router.post('/', booksController.insertBook);

module.exports = router;
