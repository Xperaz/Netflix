import { feature4 } from "../../assets"

const Kids = () => {
  return (
    <section className="w-full flex justify-center items-center border-b-8 border-[#232323]">
    <div className="flex justify-between mx-24 py-14">
      <img src={feature4} className="flex-1 w-[300px] h-[400px]"></img>
      <div className="flex flex-col justify-center gap-4 flex-1">
        <h1 className="font-bold font-lato text-[2.5em]">Create profiles for kids</h1>
        <p  className="font-lato text-[1.6em]">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
      </div>
    </div>
  </section>
  )
}

export default Kids