import { feature3 } from "../../assets"

const Screens = () => {
  return (
    <section className="w-full flex justify-center items-center border-b-8 border-[#232323]">
    <div className="flex justify-between mx-24 py-14">
      <div className="flex flex-col justify-center gap-4 flex-1">
        <h1 className="font-bold font-lato text-[2.5em]">Watch everywhere</h1>
        <p  className="font-lato text-[1.6em]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <img src={feature3} className="flex-1 w-[300px] h-[400px]"></img>
    </div>
  </section>
  )
}

export default Screens