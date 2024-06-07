"use client"

import { useRouter } from "next/navigation"

const GoBackButton = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <button
      onClick={handleGoBack}
      className="mt-4 ml-4 px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-400 bg-gray-200 rounded hover:bg-gray-400"
    >
      <span className="hidden md:inline text-lg">Go Back</span>
    </button>
  )
}

export default GoBackButton
