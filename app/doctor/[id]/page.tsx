"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { DoctorProfile } from "@/components/doctor-profile"
import { Navbar } from "@/components/navbar"
import type { Doctor } from "@/types"
import Link from "next/link"

export default function DoctorPage() {
  const params = useParams()
  const [doctor, setDoctor] = useState<Doctor | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`/api/doctors/${params.id}`)
        if (!response.ok) {
          throw new Error("Doctor not found")
        }
        const doctorData = await response.json()
        setDoctor(doctorData)
      } catch (error) {
        console.error("Error fetching doctor:", error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchDoctor()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-32 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border/50">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-32 bg-muted rounded-full"></div>
                    <div className="flex-1 space-y-4">
                      <div className="h-8 bg-muted rounded w-48"></div>
                      <div className="h-6 bg-muted rounded w-32"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded"></div>
                        <div className="h-4 bg-muted rounded"></div>
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="h-6 bg-muted rounded w-48 mb-4"></div>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-4 bg-muted rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="h-6 bg-muted rounded mb-4"></div>
                  <div className="h-8 bg-muted rounded mb-4"></div>
                  <div className="h-12 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <h1 className="text-4xl font-bold mb-4">Doctor Not Found</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              The doctor you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              ← Back to Doctors
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <DoctorProfile doctor={doctor} />
    </div>
  )
}
