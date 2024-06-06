"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

interface IProvidersProps {
  children: ReactNode
}

const Providers = ({children}: IProvidersProps) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-800 dark:text-gray-200 dark:bg-gray-800 min-h-screen select-none transition-colors duration-200">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers
