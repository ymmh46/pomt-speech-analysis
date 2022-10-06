import { BsFillPersonCheckFill } from "react-icons/bs"

type leftProps = {
  status: "pending" | "analyzing" | "paused" | "summary";
  score?: number;
}

const LeftScore: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-md ml-2">
      <BsFillPersonCheckFill />
    </div>
  )
}

export default LeftScore
