import { Router } from "express";

export const voteListRoute = Router();


voteListRoute.get("/list", (req, res) => {
    res.json({
        test: true
    });
})
voteListRoute.get("/:id", (req, res) => {
    res.send("OK");
})
voteListRoute.post("/create", (req, res) => {
    res.send("OK");
})
voteListRoute.patch("/:id", (req, res) => {
    res.send("OK");
})
voteListRoute.delete("/:id", (req, res) => {
    res.send("OK");
})