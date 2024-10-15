import { createBrowserRouter, RouteObject } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tabela from "../pages/Tabela";

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
        path: "/tabela",
        element: <Tabela />
    }
];

export const router = createBrowserRouter([{
    path: '/',
    element: < Root />,
    children: routes
}]);