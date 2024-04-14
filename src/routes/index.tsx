import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/not-found";
import { Root } from "./RootRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRoute } from "./AuthRoute";


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound></NotFound>,
    Component: Root,
    children: [
      {
        path: '/',
        element: <Navigate to={'/dashboard'}></Navigate>,
        index: true,
      },
      {
        path: "/",
        Component: AuthRoute,
        children: [
          {
            path: "login",
            element: <Login></Login>,
            index: true,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
        ]
      },
      {
        Component: PrivateRoute,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard></Dashboard>
          },
          {
            path: 'test',
            element: <div>Test</div>
          }
        ]
      }
    ]
  },
]);

export { router };
