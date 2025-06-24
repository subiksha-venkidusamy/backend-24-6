const express = require("express");
const app = express();

app.get("/add/:a/:b", (req, res) => {
  const sum = parseInt(req.params.a) + parseInt(req.params.b);
  //res.send(`The sum of ${req.params.a} and ${req.params.b} is ${sum}`);
  res.json({
    sum: sum,
  });
});

module.exports = app;
