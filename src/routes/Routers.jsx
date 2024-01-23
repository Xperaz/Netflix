import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RoutingError from '../components/shared/RoutingError'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <RoutingError />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ])