const router = require("express");

const newRouter = router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = newRouter;
