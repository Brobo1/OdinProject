const router = require("express");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = router();

indexRouter.post("/new", (req, res) => {
  const bodyObj = req.body;
  messages.push({
    text: bodyObj.messageText,
    user: bodyObj.authorName,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

indexRouter.get("/message/:messageId", (req, res) => {
  const messageId = messages[parseInt(req.params.messageId)];
  res.send(`${messageId.text} <br> ${messageId.user} <br> ${messageId.added}`);
});

module.exports = indexRouter;
