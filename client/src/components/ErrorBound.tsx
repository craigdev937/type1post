import React from "react";
import { useRouteError, Link } from "react-router-dom";

export const ErrorBound = (): JSX.Element => {
    let error = useRouteError() as Error;

    return (
        <React.Fragment>
            <main id="error">
                <h1>That Page doesn't Exist! 😰</h1>
                <pre>{error.message}</pre>
                <Link to="/"><button>Home</button></Link>
            </main>
        </React.Fragment>
    );
};


