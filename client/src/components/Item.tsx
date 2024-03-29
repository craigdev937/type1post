import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/Interfaces";

type Props = {
    player: IPlayer
};

export const Item = ({player}: Props): JSX.Element => {
    return (
        <React.Fragment>
            <main key={player.id}>
                <h1>{player.alias}</h1>
                <h3>{player.first} {player.last}</h3>
                <p>Age: {player.age}</p>
                <p>Info: {player.info}</p>
                <button>
                    <Link to={`/edit/${player.id}`}
                        >Edit Player
                    </Link>
                </button>
            </main>
        </React.Fragment>
    );
};


