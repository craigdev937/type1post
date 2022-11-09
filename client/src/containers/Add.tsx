import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../global/ReduxToolkit";
import { API } from "../global/FetchAPI";
import { IPlayer } from "../models/Interfaces";

export const Add = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [player, setPlayer] = React.useState({} as IPlayer);

    const handleChange = (event: any) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value})
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        dispatch(API.create(player))
    };

    return (
        <React.Fragment>
            <h1>Add</h1>
        </React.Fragment>
    );
};


