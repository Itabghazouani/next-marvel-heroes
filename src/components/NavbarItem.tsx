import Link from 'next/link';
import React from 'react'

interface INavbarItemProps {
  title: string;
  param?: string
}
const NavbarItem = ({title, param}: INavbarItemProps) => {

  return (
    <div>
      <Link
        className={`hover:text-red-500 font-semibold`}
        href={"/"}>{title}</Link>
    </div>
  )
}

export default NavbarItem
