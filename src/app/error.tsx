"use client"

import { useEffect } from "react"

interface IErrorProps{
  error: Error & { digest?: string }
  reset: () => void
}
const Error = ({ error, reset }: IErrorProps) => {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later</h1>
      <button className="hover:text-red-400" onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error
