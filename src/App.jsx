import React from 'react';
import { Navigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import Profil from './pages/profil.jsx';
import Layout from './components/layout.jsx';
// Remix icon
import 'remixicon/fonts/remixicon.css';

import('./style/reset.css');
import('./style/App.css');

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: ':slug',
        element: <Profil />,
        // children: [
        //   {
        //     path: '/',
        //     element: <Navigate replace to=":slug" />,
        //   }
        // ]
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={routes} />
}
