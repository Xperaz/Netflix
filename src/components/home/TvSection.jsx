import { feature1 } from "../../assets"

const TvSection = () => {
  return (
    <section className="w-full flex justify-center items-center border-b-8 border-[#232323]">
        <div className="flex justify-between mx-24 py-14">
          <div className="flex flex-col justify-center gap-4 flex-1">
            <h1 className="font-bold font-lato text-[2.5em]">Enjoy on your TV</h1>
            <p  className="font-lato text-[1.6em]">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <img src={feature1} className="flex-1 w-[300px] h-[400px]"></img>
        </div>

      </section>
  )
}

export default TvSection