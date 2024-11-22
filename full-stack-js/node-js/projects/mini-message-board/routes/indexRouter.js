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

function handleClick() {
  console.log("123123");
}

indexRouter.post("/new", (req, res) => {
  const bodyObj = req.body;
  messages.push({
    text: bodyObj.messageText,
    user: bodyObj.authorText,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    handleClick: handleClick,
  });
});

module.exports = indexRouter;
