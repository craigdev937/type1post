import express from "express";
import { Player } from "../models/Player";

class PlayerClass {
    CreatePlayer: express.RequestHandler =
    async (req, res, next) => {
        try {
            const player: Player = new Player();
            player.alias = req.body.alias;
            player.first = req.body.first;
            player.last = req.body.last;
            player.age = req.body.age;
            player.info = req.body.info;
            await player.save();
            return res.status(201).json(player);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.RequestHandler =
    async (req, res, next) => {
        try {
            await Player.find()
            .then((players) => res.json(players));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };
};

export const PLAYER: PlayerClass = new PlayerClass();




