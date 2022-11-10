import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../global/ReduxToolkit";
import { API } from "../global/FetchAPI";
import { IPlayer } from "../models/Interfaces";

export const Add = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [player, setPlayer] = React.useState<IPlayer>({
        id: "", alias: "", first: "", 
        last: "", age: 0, info: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement |
        HTMLTextAreaElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(API.create(player));
        setPlayer({} as IPlayer);
        navigate("/");
    };

    return (
        <React.Fragment>
            <h1>Add a new Player!</h1>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="alias">Alias</label>
                    <input 
                        type="text" 
                        name="alias"
                        placeholder="Alias"
                        value={player.alias}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label htmlFor="first">First Name</label>
                    <input 
                        type="text" 
                        name="first"
                        placeholder="First Name"
                        value={player.first}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label htmlFor="last">Last Name</label>
                    <input 
                        type="text" 
                        name="last"
                        placeholder="Last Name"
                        value={player.last}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age"
                        placeholder="Age"
                        value={player.age}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label htmlFor="info">Info</label>
                    <textarea 
                        name="info"
                        placeholder="Players Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </section>
                <footer>
                    <button>
                        <Link to="/">Cancel</Link>
                    </button>
                    <button 
                        type="submit"
                        >Add Player
                    </button>
                </footer>
            </form>
        </React.Fragment>
    );
};


