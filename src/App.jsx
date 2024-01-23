import { Outlet, RouterProvider, useNavigate } from "react-router-dom"
import { router } from "./routes/Routers"
import { Provider, useDispatch } from "react-redux"
import appStore from "./state/appStore"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/firebase"
import { addUser, removeUser } from "./state/userSlice"


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email,  displayName} = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, [dispatch, navigate]);

  return (
    <Provider store={appStore}>
        <RouterProvider router={router}>
            <Outlet />
    </RouterProvider>
      </Provider>

  )
}

export default App
