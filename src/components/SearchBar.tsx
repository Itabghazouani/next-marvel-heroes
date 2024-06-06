"use client"

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {

  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/search/${search}`)
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-between px-5 max-w-6xl mx-auto">
      <input
        type="text"
        placeholder="Search for character..."
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='text-white disabled:text-gray-400'
        disabled={search === ""}>
          <FaSearch />
        </button>
    </form>
  )
}

export default SearchBar
