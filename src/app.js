const express = require("express");
const arith = require("./routes/arith.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(req.query.num);
});

app.use("/arith", arith);

module.exports = app;
