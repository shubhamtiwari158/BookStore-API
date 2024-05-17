const express = require("express");
const router = express.Router();
const books = require("../controller/bookstore.controller"); // Corrected variable name

// Create a new Book
router.post('/books', books.create);

// Retrieve all Books
router.get('/books', books.findAll);

// Retrieve a single Book with bookId
router.get('/book/:bookId', books.findOne);

// Update a Book with bookId
router.patch('/book/:bookId', books.update);

// Delete a Book with bookId
router.delete('/book/:bookId', books.delete);

module.exports = router;
