"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Calendar, Award, Users } from "lucide-react"
import type { Doctor } from "@/types"
import { BookingModal } from "@/components/booking-modal"
import Image from "next/image"

interface DoctorProfileProps {
  doctor: Doctor
}

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  const [showBookingModal, setShowBookingModal] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <a href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Back to Doctors
      </a>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Doctor Info */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32">
                    <Image
                      src={doctor.profileImage || "/placeholder.svg"}
                      alt={doctor.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                  <Badge variant="secondary" className="mb-4 text-lg px-3 py-1">
                    {doctor.specialization}
                  </Badge>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-gray-500">({doctor.reviewCount} reviews)</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-5 w-5" />
                      <span>{doctor.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-5 w-5" />
                      <span>{doctor.experience} years experience</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${doctor.isAvailable ? "bg-green-500" : "bg-red-500"}`}
                      ></div>
                      <span className={doctor.isAvailable ? "text-green-600" : "text-red-600"}>
                        {doctor.isAvailable ? "Available Today" : "Busy"}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Qualifications */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Qualifications & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {doctor.qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Languages Spoken
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map((language, index) => (
                  <Badge key={index} variant="outline">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">${doctor.consultationFee}</div>
                  <div className="text-sm text-gray-500">Consultation Fee</div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Available Time Slots</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {doctor.availableSlots.map((slot, index) => (
                      <Badge key={index} variant="outline" className="justify-center py-2">
                        {slot}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                  onClick={() => setShowBookingModal(true)}
                  disabled={!doctor.isAvailable}
                >
                  {doctor.isAvailable ? "Book Appointment" : "Currently Unavailable"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  You can cancel or reschedule up to 24 hours before your appointment
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <BookingModal doctor={doctor} isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </div>
  )
}
