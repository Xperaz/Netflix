import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { checkDataIsValid } from "../../utils/validateForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";


const LoginForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

    const handleButtonClick = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        let name;
        let message;

        if (!isSignIn) name = nameRef.current.value;

        if (!isSignIn) {
            message = checkDataIsValid(email, password, name);
        } else {
            message = checkDataIsValid(email, password, null);
        }
        setErrorMessage(message);
        if (message !== null) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2FXperaz&psig=AOvVaw26AquHNajWvUWc_xl9k28M&ust=1706278438477000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDKtuXc-IMDFQAAAAAdAAAAABAD"

                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                navigate('/login')
            })
        }

        else if (isSignIn) {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/browse');
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                navigate('/login')
            });
        }
    }

  return (
    <div className="w-[80vw] lg:w-[37%] bg-black/75 py-10 px-12 absolute top-[35%] left-[50%] 
        -translate-x-[50%] -translate-y-[50%] flex flex-col justify-between gap-20 rounded-lg pb-32">
        <form onClick={(e) => e.preventDefault()}
            className="flex flex-col gap-8">
            <h1 className="font-lato text-[2em]">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn &&
                <input ref={nameRef} 
                    type="name" name="name" placeholder="Full Name"
                    className="p-3 bg-secondary outline-none rounded-md"
            />
            }
            <input ref={emailRef}
                type="email" name="email" placeholder="Email"
                className="p-3 bg-secondary outline-none rounded-md"
            />
            <input ref={passwordRef}
                type="password" name="password" placeholder="Password"
                className="p-3 bg-secondary outline-none rounded-md"
            />
            <button onClick={handleButtonClick}
                className="w-full bg-primary text-[1.2em] p-3 rounded-md">
                {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            {errorMessage !== null && <p className="text-red-500">{errorMessage}</p>}

            <div className="flex justify-between">
                <div className="flex gap-1">
                    <input type="checkbox" className="accent-paragraph after:bg-secondary" />
                    <p className="text-paragraph">Remember me</p>
                </div>
                <Link to='/login' className="text-paragraph">Need help?</Link>
            </div>
        </form>
        <div className="flex flex-col gap-4">
            <p className="text-paragraph flex gap-2 text-[1.1em]">
                {isSignIn ? "New To Netflix?" : "Already Registred?"}
                <span onClick={toggleSignInForm} className="text-white cursor-pointer">{isSignIn ? "Sign up now" : "Sign In"}</span>
            </p>
            <p className="text-paragraph font-light text-[0.95em] ">
                This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{' '}
                <Link to='/login' className="text-[#0071EB]" >Learn more</Link>
            </p>
        </div>
    </div>
  )
}

export default LoginForm