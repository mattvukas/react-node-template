var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  console.log('get "users" route hit');
  res.send({ users: ["mvukas"] });
});

module.exports = router;
