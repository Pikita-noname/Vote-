import express from "express";
import mongoose from "mongoose";

import { userRoute } from "./routes/userRoute.js";
import { voteListRoute } from "./routes/votelistRoute.js";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/Vote")
  .then(() => console.log("DB ok"))
  .catch((e) => console.log(e));

app.use(express.json());

app.use("/user", userRoute);
app.use("/voteList", voteListRoute);

app.listen(2805, (err) => {
  if (err) return console.log("не ОК");

  console.log("OK");
});
