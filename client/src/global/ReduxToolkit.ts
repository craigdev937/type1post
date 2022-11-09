import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, 
    useSelector, useDispatch } from "react-redux";
import { PlayerReducer } from "./PlayerSlice";

export const RReducer = configureStore({
    reducer: {
        players: PlayerReducer,
    },
});

export type RootState = ReturnType<typeof RReducer.getState>;
export type AppDispatch = typeof RReducer.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: 
    TypedUseSelectorHook<RootState> = useSelector;


    