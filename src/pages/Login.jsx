import { bg_2 } from "../assets"
import Header from "../container/Header"
import LoginForm from "../container/login/LoginForm"
import LoginFooter from "../container/login/LoginFooter"

const Login = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <Header btnName="" />
      <img src={bg_2} alt="netflix background image" className=" opacity-55 w-full h-full" />
      <LoginForm />
      <LoginFooter />
    </div>
  )
}

export default Login