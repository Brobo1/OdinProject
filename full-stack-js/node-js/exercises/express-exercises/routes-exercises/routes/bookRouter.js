const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All authors"));
bookRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID ${authorId}`);
});

module.exports = bookRouter;
