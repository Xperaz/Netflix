import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Browse from './pages/Browse';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/browse',
    element: <Browse />
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </div>
  );
}

export default App;
