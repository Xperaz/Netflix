import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RoutingError from '../components/shared/RoutingError'
import Layout from '../Layout'
import AuthRequired from "../hooks/AuthRequired";




export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<SignUp />} />
    <Route element={<AuthRequired />}>
      <Route path="browse" element={<Browse />} />
    </Route>
    <Route path="*" element={<RoutingError />} />
  </Route>
));
