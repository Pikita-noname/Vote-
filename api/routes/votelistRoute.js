import { Router } from "express";
import { createController } from "../controllers/VotelistController.js";

export const voteListRoute = Router();

voteListRoute.get("/list", (req, res) => {
  res.json({
    test: true,
  });
});
voteListRoute.get("/:id", createController);
voteListRoute.post("/create", createController);
voteListRoute.patch("/:id", (req, res) => {
  res.send("OK");
});
voteListRoute.delete("/:id", (req, res) => {
  res.send("OK");
});