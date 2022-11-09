import { createSlice, createEntityAdapter, 
    PayloadAction } from "@reduxjs/toolkit";
import { IPlayer, PlayerState } from "../models/Interfaces";
import { RootState } from "./ReduxToolkit";
import { API } from "./FetchAPI";

const playerAdapter = createEntityAdapter<IPlayer>({
    selectId: (player) => player.id,
    sortComparer: (a, b) => a.first.localeCompare(b.first),
});

export const playerSelectors =
playerAdapter.getSelectors<RootState>((state) => state.players);

const initialState: PlayerState = {
    players: [],
    isLoading: false,
    isError: null
};

const PlayerSlice = createSlice({
    name: "players",
    initialState: playerAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(API.fetchAll.rejected.type,
                (state, action: PayloadAction<string>) => {
                state.isLoading = false,
                state.isError = action.payload
            })
            .addCase(API.fetchAll.pending, (state) => {
                state.isLoading = true
            })
            .addCase(API.fetchAll.fulfilled, (state, action) => {
                state.isLoading = false,
                playerAdapter.setAll(state, [...action.payload])
            })
            .addCase(API.getOne.rejected.type,
                (state, action: PayloadAction<string>) => {
                state.isLoading = false,
                state.isError = action.payload
            })
            .addCase(API.getOne.pending, (state) => {
                state.isLoading = true
            })
            .addCase(API.getOne.fulfilled, (state, action) => {
                state.isLoading = false,
                playerAdapter.setOne(state, action.payload)
            })
            .addCase(API.create.rejected.toString(),
                (state, action: PayloadAction<string>) => {
                state.isLoading = false,
                state.isError = action.payload
            })
            .addCase(API.create.pending, (state) => {
                state.isLoading = true
            })
            .addCase(API.create.fulfilled,
                (state, action) => {
                state.isLoading = false,
                playerAdapter.addOne(state, action.payload)
            })
            .addCase(API.update.rejected.type, 
                (state, action: PayloadAction<string>) => {
                state.isLoading = false,
                state.isError = action.payload
            })
            .addCase(API.update.pending, (state) => {
                state.isLoading = true
            })
            .addCase(API.update.fulfilled, (state, action) => {
                state.isLoading = false;
                playerAdapter.updateOne(state, {
                    id: action.payload.id,
                    changes: action.payload
                })
            })
            .addCase(API.delete.rejected.toString(),
                (state, action: PayloadAction<string>) => {
                state.isLoading = false,
                state.isError = action.payload
            })
            .addCase(API.delete.pending, (state) => {
                state.isLoading = true
            })
            .addCase(API.delete.fulfilled.type,
                (state, action: PayloadAction<IPlayer>) => {
                state.isLoading = false,
                playerAdapter.removeOne(state, action.payload.id)
            })
    },
});

export const PlayerReducer = PlayerSlice.reducer;



