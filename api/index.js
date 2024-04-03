import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { userRoute } from "./routes/userRoute.js";
import { voteListRoute } from "./routes/votelistRoute.js";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/Vote")
  .then(() => console.log("DB ok"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/voteList", voteListRoute);

app.listen(8888, (err) => {
  if (err) return console.log("не ОК");

  console.log("OK");
});
