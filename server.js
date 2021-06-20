const express = require("express");
const bodyparser = require("body-parser");
const parse = require("node-html-parser").parse;
const fs = require("fs");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/static", express.static("public"));
app.set("view engine", "ejs");

var bmi = "";

app.get("/", function (req, res) {
  res.render("bmi", { bmiResults: bmi });
});

app.post("/", function (req, res) {
  var height = Number(req.body.height) / 100;
  var weight = Number(req.body.weight);
  bmi = (weight / (height * height)).toFixed(2);

  res.render("bmi", { bmiResults: "Your bmi is: "+bmi });
});

app.listen(3000, function () {
  console.log("Server Started on port: 3000");
});
