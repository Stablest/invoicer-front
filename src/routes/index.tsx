import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import { Dashboard } from "../pages/dashboard";
import { NotFound } from "../pages/not-found";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Navigate to={'/login'}></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ]
  },

], { basename: '/' });

export { router };
