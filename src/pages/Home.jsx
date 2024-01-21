import Header from "../container/Header"
import { hero_img } from "../assets"
import Hero from "../container/home/Hero"
import TvSection from "../components/home/TvSection"
import Download from "../components/home/Download"
import Screens from "../components/home/Screens"
import Kids from "../components/home/Kids"
import Accordion from "../container/home/Accordion"
import Footer from "../container/home/Footer"


const Home = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="relative border-b-8 border-[#232323]">
        <Header hasLogin={true} />
        <div className="">
          <img src={hero_img} alt="hero section image" className="opacity-50 w-full"/>
        </div>
        <Hero />
      </div>
      <TvSection />
      <Download />
      <Screens />
      <Kids />
      <Accordion />
      <Footer />
    </div>
  )
}

export default Home