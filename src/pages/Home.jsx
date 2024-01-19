import Header from "../container/Header"
import { hero_img } from "../assets"
import Hero from "../container/home/Hero"
import { feature1 } from "../assets";

const Home = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="relative border-b-8 border-[#232323]">
        <Header />
        <div className="">
          <img src={hero_img} alt="hero section image" className="opacity-50 w-full"/>
        </div>
        <Hero />
      </div>

      <div className="flex justify-between mx-10 w-full border-b-8 border-[#232323]">
        <div className="flex flex-col justify-center gap-4 flex-1">
          <h1 className="font-bold font-lato text-[2em]">Enjoy on your TV</h1>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <img src={feature1} className="flex-1 max-w[93%]"></img>
      </div>
    </div>
  )
}

export default Home