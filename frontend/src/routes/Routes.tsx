import { createBrowserRouter, RouteObject } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import PaginaA from "../pages/PaginaA";
import PaginaB from "../pages/PaginaB";

const routes: RouteObject[] = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "/paginaA",
        element: <PaginaA />
    },
    {
        path: "/paginaB",
        element: <PaginaB />
    }
];

export const router = createBrowserRouter([{
    path: '/',
    element: < Root />,
    children: routes
}]);