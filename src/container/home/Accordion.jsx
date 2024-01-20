import { useState } from "react";
import Panel from "../../components/home/Panel"
import { data } from "../../constants/accordionData";
import Register from "../../components/home/Register";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleShowItem = (index) => {
    if (index === activeIndex) {
      return setActiveIndex(null);
    }
    setActiveIndex(index);
  }

  return (
    <div className=" border-b-8 border-[#232323] flex flex-col justify-center items-center w-full gap-8 py-20">
        <h1 className="font-lato font-bold text-[3em]">Frequently Asked Questions</h1>
        <div className="flex w-[80vw] flex-col gap-2">
            { data.map((item, i) => (
              <Panel key={item.id} isActive={activeIndex === i}  onShow={() => handleShowItem(i)} info={item} />
            ))}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h2 className="font-lato  text-[1.3em]">Ready to watch? Enter your email to create or restart your membership.</h2>
          <Register />
        </div>
    </div>
  )
}

export default Accordion