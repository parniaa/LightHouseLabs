const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("server is up");
});
app.get("/", (req,res) => {
  res.send("hello");
});
app.get("/parks", (req,res) => {
  res.send("hello from parks");
});