import { NextResponse } from "next/server"
import type { Appointment } from "@/types"

// In a real application, this would be stored in a database
const appointments: Appointment[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const appointment: Appointment = {
      id: Date.now().toString(),
      doctorId: body.doctorId,
      doctorName: body.doctorName,
      patientName: body.patientName,
      email: body.email,
      phone: body.phone,
      date: body.date,
      timeSlot: body.timeSlot,
      reason: body.reason,
      consultationFee: body.consultationFee,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }

    appointments.push(appointment)

    return NextResponse.json(appointment, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(appointments)
}
