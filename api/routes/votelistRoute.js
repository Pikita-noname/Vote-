import { Router } from "express";
import 
{
  createController,
  getController,
  updateController,
  deleteCotroller,
  getAllCotroller,
}
from "../controllers/VotelistController.js";

export const voteListRoute = Router();

voteListRoute.get("/", getAllCotroller);
voteListRoute.get("/:id", getController);
voteListRoute.post("/create", createController);
voteListRoute.patch("/:id", updateController);
voteListRoute.delete("/:id", deleteCotroller);
