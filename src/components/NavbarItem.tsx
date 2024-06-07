"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


interface INavbarItemProps {
  title: string;
  param?: string
}
const NavbarItem = ({title, param}: INavbarItemProps) => {

  const searchParams = useSearchParams()
  const comics = searchParams.get('comics')

  return (
    <div>
      <Link
        className={`hover:text-red-500 font-semibold ${
          comics === param && "underline underline-offset-8 decoration-4 decoration-red-500 rounded-lg"
        }`}
        href={`/?comics=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem
