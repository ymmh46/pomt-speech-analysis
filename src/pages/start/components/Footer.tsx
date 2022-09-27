import FooterWrapper from "components/FooterWrapper"
import { FaPaperPlane } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="flex items-center justify-center w-full h-12 px-2 mx-4 bg-emerald-400 rounded-md font-mplus text-lg font-bold shadow-sm cursor-pointer">
        Start
        <FaPaperPlane className="ml-2" />
      </div>
    </FooterWrapper>
  )
}

export default Footer
