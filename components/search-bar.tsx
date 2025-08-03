"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useAppContext } from "@/contexts/app-context"

export function SearchBar() {
  const { setSearchQuery, setSpecializationFilter } = useAppContext()
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    setSearchQuery(query)
  }

  const handleSpecializationChange = (value: string) => {
    setSpecializationFilter(value === "all" ? "" : value)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search doctors by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
      </div>
      <Select onValueChange={handleSpecializationChange}>
        <SelectTrigger className="w-full md:w-48">
          <Filter className="h-4 w-4 mr-2" />
          <SelectValue placeholder="Specialization" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Specializations</SelectItem>
          <SelectItem value="Cardiology">Cardiology</SelectItem>
          <SelectItem value="Dermatology">Dermatology</SelectItem>
          <SelectItem value="Neurology">Neurology</SelectItem>
          <SelectItem value="Pediatrics">Pediatrics</SelectItem>
          <SelectItem value="Orthopedics">Orthopedics</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
        Search
      </Button>
    </div>
  )
}
