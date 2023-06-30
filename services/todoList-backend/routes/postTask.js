var express = require("express");
var router = express.Router();

router.get("/task", function (req, res, next) {
  res.send("POST request to the homepage");
});

module.exports = router;
