import Link from "next/link"
import { IconType } from "react-icons"

interface IMenuItemProps {
  title: string,
  address: string,
  Icon: IconType
}

const MenuItem = ({title, address, Icon}: IMenuItemProps) => {
  return (
    <Link href={address} className="hover:text-red-500">
      <Icon className="text-2xl md:hidden" />
      <p className="uppercase hidden md:inline text-sm">{title}</p>
    </Link>
  )
}

export default MenuItem
