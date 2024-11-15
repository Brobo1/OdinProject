const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Hello");
  console.log("will still run!");
  res.send("bye");
});
