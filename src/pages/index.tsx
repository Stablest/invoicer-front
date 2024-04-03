import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { Dashboard } from "./Dashboard";
import { NotFound } from "./not-found";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound></NotFound>,
    element: ,
    children: [
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
