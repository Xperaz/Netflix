import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Panel = ({isActive, onShow, info}) => {
    

  return (
    <>
    <div onClick={onShow}
        className="flex justify-center flex-col items-center gap-2 bg-secondary w-full h-20 cursor-pointer">
        <div
            className="w-full flex justify-between items-center px-4"
        >
            <h2 className="font-lato font-medium text-[1.5em]">{info.question}</h2>
            <span >
                { !isActive ? ( <FaPlus /> ) : ( <RxCross2 /> ) }
            </span>
        </div>
    </div>
    <p className={`${isActive ? "bg-secondary p-5 font-lato font-medium text-[1.5em] transition-all duration-500 ease-in" 
                : "hidden transition-all duration-500 ease-out"}`}>
       {info.answer}
    </p>
    </>
  )
}

export default Panel