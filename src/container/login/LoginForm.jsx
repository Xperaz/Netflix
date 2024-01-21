import { useState } from "react"
import { Link } from "react-router-dom"


const LoginForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

  return (
    <div className="w-[80vw] lg:w-[37%] bg-black/75 py-10 px-12 absolute top-[35%] left-[50%] 
        -translate-x-[50%] -translate-y-[50%] flex flex-col justify-between gap-20 rounded-lg pb-32">
        <form className="flex flex-col gap-8">
            <h1 className="font-lato text-[2em]">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn &&
                <input type="name" name="name" placeholder="Full Name"
                className="p-3 bg-secondary outline-none rounded-md"
            />
            }
            <input type="email" name="email" placeholder="Email"
                className="p-3 bg-secondary outline-none rounded-md"
            />
            <input type="password" name="password" placeholder="Password"
                className="p-3 bg-secondary outline-none rounded-md"
            />
            <button className="w-full bg-primary text-[1.2em] p-3 rounded-md">{isSignIn ? "Sign In" : "Sign Up"}</button>

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
                <p onClick={toggleSignInForm} className="text-white cursor-pointer">{isSignIn ? "Sign up now" : "Sign In"}</p>
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