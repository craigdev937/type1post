import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../global/ReduxToolkit";
import { IPlayer } from "../models/Interfaces";
import { API } from "../global/FetchAPI";

export const Edit = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const playerID = id !== undefined ? String(id) : "";
    const [player, setPlayer] = React.useState({
        id: playerID, alias: "", first: "", 
        last: "", age: 0, info: ""
    });

    React.useEffect(() => {
        dispatch(API.getOne(playerID))
    }, [dispatch]);

    const handleDelete = () => {
        dispatch(API.delete(playerID));
    };

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement |
        HTMLTextAreaElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(API.update(player));
        setPlayer({} as IPlayer);
        navigate("/");
    };

    return (
        <React.Fragment>
            <h1>Edit Player</h1>
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
                    <button onClick={handleDelete}>Delete</button>
                    <button 
                        type="submit"
                        >Update Player
                    </button>
                </footer>
            </form>
        </React.Fragment>
    );
};



