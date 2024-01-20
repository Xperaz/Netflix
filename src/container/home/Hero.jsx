import Register from "../../components/home/Register"

const Hero = () => {

  return (
    <div className="w-full flex flex-col items-center gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="leading-2 flex flex-col gap-4 justify-center items-center ">
          <h1 className="font-bold font-lato text-[3em]">Unlimited movies, TV shows, and more</h1>
          <p className="font-medium font-lato text-[1.3em]">Watch anywhere. Cancel anytime.</p>
          <p className="font-medium font-lato text-[1.3em]">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        
        <Register />
    </div>
  )
}

export default Hero