import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./features/pages/Portfolio";
import Projetos from "./features/pages/Projetos";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />
  },
  {
    path: '/projetos',
    element: <Projetos />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
