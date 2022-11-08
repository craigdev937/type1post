import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Players } from "../components/Players";
import { Add } from "../containers/Add";
import { Edit } from "../containers/Edit";
import { ErrorBound } from "../components/ErrorBound";

const RRouter = createBrowserRouter([
    {
        path: "/",
        element: <Players />,
        errorElement: <ErrorBound />
    },
    {
        path: "/add",
        element: <Add />,
        errorElement: <ErrorBound />
    },
    {
        path: "/edit/:id",
        element: <Edit />,
        errorElement: <ErrorBound />
    }
]);

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <RouterProvider router={RRouter} />
        </React.Fragment>
    );
};


