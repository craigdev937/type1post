import express from "express";
import { PLAYER } from "../controllers/playCon";

export const playRt: express.Router = express.Router();
    playRt.post("/", PLAYER.CreatePlayer);
    playRt.get("/", PLAYER.FetchAll);
    playRt.get("/:id", PLAYER.GetOne);


