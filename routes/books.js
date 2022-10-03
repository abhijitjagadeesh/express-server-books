var express = require("express");
var router = express.Router();

/* GET books listing. */
router.get("/books", function (req, res, next) {
  res.send("Books");
});

module.exports = router;
