import { feature2 } from "../../assets"

const Download = () => {
  return (
    <section className="w-full flex justify-center items-center border-b-8 border-[#232323]">
        <div className="flex justify-between mx-24 py-14">
          <img src={feature2} className="flex-1 w-[300px] h-[400px]"></img>
          <div className="flex flex-col justify-center gap-4 flex-1">
            <h1 className="font-bold font-lato text-[2.5em]">Download your shows to watch offline</h1>
            <p  className="font-lato text-[1.6em]">Save your favorites easily and always have something to watch.</p>
          </div>
        </div>
      </section>
  )
}

export default Download