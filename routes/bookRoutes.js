const express = require("express");
const router = require("express").Router()
const {  getAllBooks,
     AddBookform,
     getBook,
     editBook,
     deleteBook,
     deleteBooks } = require("../controllers/bookController")

router.get("/",getAllBooks); // get home page with all teh books
router.get("/form",AddBookform); // get a form to add a book
router.post("/form",AddBookform); // post / add a book to the database
router.get("/:id",getBook) // get a single book
router.patch("/form/:id",editBook) // go to the book form and edit
router.delete("/:id",deleteBook) // delete a single book
router.delete("/",deleteBooks) // delete all books

module.exports = router;