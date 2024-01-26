import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { addUser, removeUser } from "../state/userSlice";
import { Outlet, useNavigate } from "react-router-dom";

const AuthRequired = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          return <Outlet />;
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/login');
        }
      });

      return () => unsubscribe();
    }, [dispatch, navigate]);
    
  return <Outlet />;
}

export default AuthRequired;