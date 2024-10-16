import { createBrowserRouter, RouteObject } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Estoque from "../pages/Estoque";

const routes: RouteObject[] = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/estoque",
        element: <Estoque />
    }
];

export const router = createBrowserRouter([{
    path: '/',
    element: < Root />,
    children: routes
}]);