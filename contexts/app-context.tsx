"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AppContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  specializationFilter: string
  setSpecializationFilter: (specialization: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [specializationFilter, setSpecializationFilter] = useState("")

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        specializationFilter,
        setSpecializationFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
