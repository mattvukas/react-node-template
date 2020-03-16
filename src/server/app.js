var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// don't think we'll be serving up any public files
// app.use(express.static(path.join(__dirname, 'public')));

// app.use("/", indexRouter);
app.use("/users", usersRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

module.exports = app;
