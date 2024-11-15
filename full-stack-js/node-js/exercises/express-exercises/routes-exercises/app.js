const express = require("express");
const app = express();

app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.end();
});

app.get("/:username/messages/:messages", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
