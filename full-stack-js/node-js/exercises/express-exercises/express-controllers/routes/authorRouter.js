const { Router } = require("express");

const {
  getAuthorById,
  getAuthors,
} = require("../controllers/authorController");

const authorRouter = Router();

authorRouter.get("/:authorId", getAuthorById);
authorRouter.get("/", getAuthors);

module.exports = authorRouter;
