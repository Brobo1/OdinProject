import "dotenv/config";
import cors from "cors";
import express from "express";
import { v4 as uuid4 } from "uuid";
import models from "./models";
import routes from "./routes/index.js";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  req.context = { models, me: models.users[1] };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/message", routes.message);

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
