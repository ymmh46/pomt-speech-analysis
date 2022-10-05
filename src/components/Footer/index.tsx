import LeftScore from "./LeftScore"
import MidText from "./MidText"
import RightBtn from "./RightBtn"

type footerProps = {
  status: "pending" | "analyzing" | "paused" | "summary";
  score: number;
}

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center fixed bottom-0 left-0 w-full">
      <div className="flex container my-4 mx-2 h-12 justify-between items-center rounded-md border-gray-200 border-solid border-[1px] shadow-md">
        <LeftScore />
        <MidText />
        <RightBtn />
      </div>
    </div>
  )
}

export default Footer

