import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './routes/Home.jsx'
import Contate from './routes/Contate';
import ErrorPage from './routes/ErrorPage';

/**
 * Importando algumas configurações da biblioteca react-router
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Página de Erro
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "contate",
        element: <Contate/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

