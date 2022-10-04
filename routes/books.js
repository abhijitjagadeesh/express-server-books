var express = require("express");
var booksRouter = express.Router();

/* GET books listing. */
booksRouter.get("/books", function (req, res, next) {
  res.send("Books");
});

export default booksRouter;
