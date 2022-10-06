import { BsFillPlayFill, BsStopFill, BsPauseFill, BsArrowCounterclockwise, BsBoxArrowUp } from "react-icons/bs"

type rightProps = {
  status: "pending" | "analyzing" | "paused" | "summary";
}

const RightBtn: React.FC<rightProps> = ({ status }) => {
  return (
    <div className="flex flex-row-reverse justify-center mr-2">
      <div className={status === "pending" ? "flex justify-center items-center w-8 h-8 bg-emerald-300 rounded-md ml-2" : "hidden"}>
        <BsFillPlayFill />
      </div>
      <div className={status === "analyzing" ? "flex justify-center items-center w-8 h-8 bg-red-400 rounded-md ml-2" : "hidden"}>
        <BsStopFill />
      </div>
      <div className={status === "analyzing" ? "flex justify-center items-center w-8 h-8 bg-yellow-300 rounded-md ml-2" : "hidden"}>
        <BsPauseFill />
      </div>
      <div className={status === "summary" ? "flex justify-center items-center w-8 h-8 bg-emerald-300 rounded-md ml-2" : "hidden"}>
        <BsArrowCounterclockwise />
      </div>
      <div className={status === "summary" ? "flex justify-center items-center w-8 h-8 bg-gray-200 rounded-md ml-2" : "hidden"}>
        <BsBoxArrowUp />
      </div>
    </div>
  )
}

export default RightBtn
