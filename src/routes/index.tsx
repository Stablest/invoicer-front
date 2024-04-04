import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import { Dashboard } from "../pages/dashboard";
import { NotFound } from "../pages/not-found";
import { PrivateRoute } from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound></NotFound>,
    Component: PrivateRoute,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
    ]
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  }
]);

export { router };
