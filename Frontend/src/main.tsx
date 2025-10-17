import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'

import HomePage from './pages/HomePage.tsx';
import Preloader from './components/Perloader.tsx';
import MainApp from './pages/MainApp.tsx';
import InfoPage from './pages/InfoPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Preloader />,
  },
  {
    path: "/home",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home/main",
        element: <MainApp />
      },
      {
        path: "/home/info",
        element: <InfoPage />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
