import Button from "../../components/shared/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/signup');
  }
  return (
    <div className="flex gap-2 w-1/2">
            <input type="email" 
              placeholder="email"
              className="bg-black/60 border w-[70%] rounded-lg px-7 py flex- outline-none focus:border-2 h-14" />
            <Button style={"flex-1 bg-primary rounded-lg flex justify-center items-center font-bold text-[1.2em]"} onClick={(e) => handleRegister(e)}>
                Get Started
                <span className="">
                <MdKeyboardArrowRight />
                </span>
            </Button>
        </div>
  )
}

export default Register