import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { Provider } from "react-redux";
import { RReducer } from "../global/ReduxToolkit";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Provider store={RReducer}>
                <Main />
            </Provider>
        </React.Fragment>
    );
};


