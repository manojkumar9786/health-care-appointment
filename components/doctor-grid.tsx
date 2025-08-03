"use client"

import { useEffect, useState } from "react"
import { DoctorCard } from "@/components/doctor-card"
import { useAppContext } from "@/contexts/app-context"
import type { Doctor } from "@/types"

export function DoctorGrid() {
  const { searchQuery, specializationFilter } = useAppContext()
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/doctors")
        const data = await response.json()
        setDoctors(data)
      } catch (error) {
        console.error("Error fetching doctors:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialization = !specializationFilter || doctor.specialization === specializationFilter
    return matchesSearch && matchesSpecialization
  })

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-card rounded-2xl shadow-lg p-6 animate-pulse border border-border/50">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-muted rounded-full mb-4"></div>
              <div className="h-6 bg-muted rounded-lg w-32 mb-2"></div>
              <div className="h-4 bg-muted rounded w-24 mb-4"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-16"></div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-20"></div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-24"></div>
              </div>
              <div className="h-10 bg-muted rounded-lg w-full"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
      {filteredDoctors.length === 0 && (
        <div className="col-span-full text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold mb-2">No doctors found</h3>
          <p className="text-muted-foreground text-lg">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  )
}
