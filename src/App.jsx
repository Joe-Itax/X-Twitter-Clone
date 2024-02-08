import React from "react";
import { Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContextProvider from "./components/context-provider/context-provider.jsx";
import Home from "./pages/home.jsx";
import Profil from "./pages/profil.jsx";
import Login from "./pages/login"
import Layout from "./components/layout.jsx";
// Remix icon
import "remixicon/fonts/remixicon.css";

import("./style/reset.css");
import("./style/App.css");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: ":slug",
        element: <Profil />,
      },
    ],
  },
  {path: "/login",
    element: <Login />,},
]);

export default function App() {
  return (
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  );
}
