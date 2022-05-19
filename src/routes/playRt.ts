import express from "express";
import { indexHome } from "../controllers/playCon";

export const playRt: express.Router = express.Router();
    playRt.get("/", indexHome);


