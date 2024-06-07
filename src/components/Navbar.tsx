import NavbarItem from "./NavbarItem"

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-700 bg-gray-200 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Avengers" param="fetchAvengers"/>
      <NavbarItem title="X-men" param="fetchXMen"/>
    </div>
  )
}

export default Navbar
