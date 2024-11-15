const express = require("express");
const path = require("node:path");
const url = require("node:url");
const app = express();

app.use((req, res, next) => {
  const filePath = path.join(
    __dirname,
    req.path === "/" ? "/index.html" : req.path + ".html",
  );
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "404.html"));
    }
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
