const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "New message" },
];

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
