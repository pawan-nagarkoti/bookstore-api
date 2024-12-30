const express = require("express");
const { addNewBook, getAllBooks, getSingleBookId, updateBook, deleteBook } = require("../controllers/book-controller");

const router = express.Router();

router.post("/add", addNewBook);
router.get("/get", getAllBooks);
router.get("/single/:id", getSingleBookId);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
