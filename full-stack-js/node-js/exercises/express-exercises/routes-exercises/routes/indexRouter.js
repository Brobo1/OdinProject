const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("All authors"));
indexRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID ${authorId}`);
});

module.exports = indexRouter;
