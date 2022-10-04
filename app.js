import createError from "http-errors";
import logger from "morgan";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import Sql3 from "./custom-modules/sqlite3";

import indexRouter from "./routes/index";
import booksRouter from "./routes/books";

// ste up db
const db = new Sql3();
db.createDb();

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//middlewares
app.use(logger("dev"));
app.use(express.json()); // used to parse the incoming HTTP request
app.use(express.urlencoded({ extended: false })); // parses query string data in the URL and puts this in request.query
app.use(cookieParser()); // takes all the cookies the client sends and puts them in request.cookies
app.use(express.static(path.join(__dirname, "public")));

// Routing
app.use("/", indexRouter);
app.use("/", booksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
