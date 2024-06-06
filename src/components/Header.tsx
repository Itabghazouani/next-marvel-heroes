import Link from "next/link"
import MenuItem from "./MenuItem"
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"
import DarkModeSwitch from "./DarkModeSwitch"

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 lg:max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome}/>
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-xl font-bold bg-red-500 py-0.5 px-1 text-white">MARVEL</span>
          <span className="text-xl hidden md:inline">Heroes</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
