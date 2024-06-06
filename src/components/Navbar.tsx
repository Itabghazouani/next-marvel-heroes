import NavbarItem from "./NavbarItem"

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-700 bg-gray-200 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="FirstItem" />
      <NavbarItem title="SecondItem" />
    </div>
  )
}

export default Navbar
