"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Mail, MessageSquare } from "lucide-react"
import type { Doctor } from "@/types"
import { useToast } from "@/hooks/use-toast"

interface BookingModalProps {
  doctor: Doctor
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ doctor, isOpen, onClose }: BookingModalProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    reason: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          doctorId: doctor.id,
          doctorName: doctor.name,
          consultationFee: doctor.consultationFee,
        }),
      })

      if (response.ok) {
        toast({
          title: "Appointment Booked Successfully!",
          description: `Your appointment with Dr. ${doctor.name} has been confirmed.`,
        })
        onClose()
        setFormData({
          patientName: "",
          email: "",
          phone: "",
          date: "",
          timeSlot: "",
          reason: "",
        })
      } else {
        throw new Error("Failed to book appointment")
      }
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error booking your appointment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.patientName && formData.email && formData.phone && formData.date && formData.timeSlot

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Book Appointment with Dr. {doctor.name}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="patientName" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Patient Name *
            </Label>
            <Input
              id="patientName"
              value={formData.patientName}
              onChange={(e) => handleInputChange("patientName", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date *</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Time Slot *
            </Label>
            <Select onValueChange={(value) => handleInputChange("timeSlot", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {doctor.availableSlots.map((slot, index) => (
                  <SelectItem key={index} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Reason for Visit (Optional)
            </Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              placeholder="Brief description of your concern"
              rows={3}
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Consultation Fee:</span>
              <span className="text-xl font-bold text-blue-600">${doctor.consultationFee}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
