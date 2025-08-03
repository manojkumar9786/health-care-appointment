export interface Doctor {
  id: string
  name: string
  specialization: string
  profileImage: string
  rating: number
  reviewCount: number
  location: string
  experience: number
  isAvailable: boolean
  bio: string
  qualifications: string[]
  languages: string[]
  consultationFee: number
  availableSlots: string[]
}

export interface Appointment {
  id: string
  doctorId: string
  doctorName: string
  patientName: string
  email: string
  phone: string
  date: string
  timeSlot: string
  reason?: string
  consultationFee: number
  status: "confirmed" | "pending" | "cancelled"
  createdAt: string
}
