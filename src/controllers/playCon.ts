import express from "express";
import { stringify } from "querystring";
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
            await Player
            .find()
                .then((players) => res.status(201)
                .json(players));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    GetOne: express.RequestHandler =
    async (req, res, next) => {
        try {
            const player = await Player.findOneBy({
                id: String(req.params.id)
            });
            return res.status(201).json(player);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    Update: express.RequestHandler =
    async (req, res, next) => {
        const { id } = req.params;
        try {
            const player = await Player.findOneBy({
                id: String(id)
            });
            if (!player) res.status(404).json(res.statusMessage)
            await Player.update({ id: String(id) }, req.body);
            return res.status(201).json("Player was Updated!");
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };
};

export const PLAYER: PlayerClass = new PlayerClass();




