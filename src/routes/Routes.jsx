import React from "react";
import Main from "../components/Main";
import Home from "../components/Home";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
    ],
  },
]);

export default Routes;
