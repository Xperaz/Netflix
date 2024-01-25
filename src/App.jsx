import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Routers"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "./state/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";


function App() {
  const dispatch = useDispatch();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        } else {
          // User is signed out
          dispatch(removeUser());
        }
      });

      return () => unsubscribe();
    }, [dispatch]);

  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
