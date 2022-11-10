import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../global/ReduxToolkit";
import { API } from "../global/FetchAPI";
import { playerSelectors } from "../global/PlayerSlice";
import { Item } from "./Item";

export const Players = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.players.isLoading);
    const isError = useAppSelector((state) => state.players.isError);
    const allPlayers = useAppSelector(playerSelectors.selectAll);
    
    React.useEffect(() => {
        dispatch(API.fetchAll())
    }, [dispatch]);

    return (
        <React.Fragment>
            <button>
                <Link to="/add">Add Player</Link>
            </button>
            {isError ? (
                <h1>Error...{isError}</h1>
            ) : isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <main>
                    {allPlayers.map((player) => (
                        <Item key={player.id} player={player} />
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};


