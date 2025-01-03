const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use(express.urlencoded({ extended: true }));

const links = [
  { href: "/", text: "Messages" },
  { href: "/new", text: "New message" },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.locals.links = links;
  next();
});

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
