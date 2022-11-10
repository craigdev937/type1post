import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPlayer } from "../models/Interfaces";

const URL = "https://type1post-player.herokuapp.com/api";

class FetchAPI {
    fetchAll = createAsyncThunk("players/fetchAll",
    async () => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const players: IPlayer[] = await res.json();
        return [...players];
    });

    getOne = createAsyncThunk("player/getOne",
    async (id: string) => {
        const res: Response = 
        await fetch(`${URL}/${id}`);
        if (!res.ok) throw new Error(res.statusText);
        const player: IPlayer = await res.json();
        return player;
    });

    create = createAsyncThunk("player/create",
    async (payload: IPlayer) => {
        const res: Response =
        await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                alias: payload.alias, first: payload.first,
                last: payload.last, age: payload.age,
                info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const player: IPlayer = await res.json();
        return player;
    });

    update = createAsyncThunk("player/update",
    async (payload: IPlayer) => {
        const res: Response =
        await fetch(`${URL}/${payload.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                alias: payload.alias, first: payload.first,
                last: payload.last, age: payload.age,
                info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const player: IPlayer = await res.json();
        return player;
    });

    delete = createAsyncThunk("player/delete",
    async (id: string) => {
        const res: Response =
        await fetch(`${URL}/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    });
};

export const API: FetchAPI = new FetchAPI();


