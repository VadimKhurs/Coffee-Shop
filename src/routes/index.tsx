/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router";

const Home = lazy(() => import("pages/Home"));

const routes: RouteObject[] = [{ path: "/", element: <Home /> }];

export default routes;
