var express = require("express");
var app = express();
var PORT = 8080;

const result = require("./functions/switch");

var operator;
var num1;
var num2;

app.get("/:operator/:num1/:num2", function(req, res) {
  operator = req.params.operator;
  num1 = parseInt(req.params.num1);
  num2 = parseInt(req.params.num2);

  res.json(result);
});

app.get("/", function(req, res) {
  res.send("hello! please type some math y'all");
});

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT:" + PORT);
});

module.exports = { num1, num2, operator };
