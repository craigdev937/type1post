import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, 
    useSelector, useDispatch } from "react-redux";

export const RReducer = configureStore({
    reducer: {
        players: () => "PERN Redux-Toolkit!"
    },
});

export type RootState = ReturnType<typeof RReducer.getState>;
export type AppDispatch = typeof RReducer.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> 
    = useSelector;


    