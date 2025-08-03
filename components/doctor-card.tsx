import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Calendar } from "lucide-react"
import type { Doctor } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 bg-card border-border/50 hover:border-border hover:-translate-y-2 overflow-hidden">
      <CardContent className="p-0">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 p-6 pb-4">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={`/placeholder.svg?height=96&width=96&text=${doctor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}`}
                alt={doctor.name}
                fill
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
              <div
                className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ${doctor.isAvailable ? "bg-green-500" : "bg-red-500"}`}
              ></div>
            </div>
            <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
            <Badge
              variant="secondary"
              className="mb-3 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
            >
              {doctor.specialization}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{doctor.rating}</span>
              <span className="text-muted-foreground">({doctor.reviewCount} reviews)</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{doctor.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{doctor.experience} years experience</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${doctor.isAvailable ? "bg-green-500" : "bg-red-500"}`}></div>
              <span
                className={doctor.isAvailable ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}
              >
                {doctor.isAvailable ? "Available Today" : "Busy"}
              </span>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-3 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">${doctor.consultationFee}</div>
              <div className="text-xs text-muted-foreground">Consultation Fee</div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/doctor/${doctor.id}`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group-hover:shadow-lg transition-all">
            <Calendar className="h-4 w-4 mr-2" />
            View Profile & Book
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
