import { MdOutlineLightMode } from "react-icons/md"

const Header: React.FC = () => {
  return (
    <div className="w-full py-2 flex justify-center top-0 left-0 fixed bg-white/50 backdrop-blur-sm">
      <div className="container mx-2 flex items-center justify-between">
        <h1 className="text-sm font-mplus">Perspective Online Meeting Tool</h1>
        <div className="flex items-center justify-center w-8 h-8 bg-amber-200 rounded-md shadow-sm">
          <MdOutlineLightMode />
        </div>
      </div>
    </div>
  )
}

export default Header
