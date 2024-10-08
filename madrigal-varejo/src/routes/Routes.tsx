import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import App from "./App";

export const routes: RouteObject[] = [
	{
		index: true,
		element: <Home />,
	},
	{
		path: "/menu",
		element: <Menu />,
	},
];

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes,
	},
]);
