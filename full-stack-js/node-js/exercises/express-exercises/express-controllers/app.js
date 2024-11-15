const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

// app.get("/:username/messages", (req, res) => {
//   console.log(req.params);
//   res.end();
// });
//
// app.get("/:username/messages/:messages", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.end();
// });

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
