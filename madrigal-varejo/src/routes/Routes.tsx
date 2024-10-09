import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/menu",
    element: <Menu />
  }
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes
  }
]);
