"use client"

import { Calendar, Users, Clock, Shield, Star, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-200/30 dark:bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-200/30 dark:bg-purple-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge
              variant="secondary"
              className="mb-6 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
            >
              <Star className="h-3 w-3 mr-1" />
              Trusted by 10,000+ Patients
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Your Health,
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Connect with top healthcare professionals and book appointments instantly. Quality care is just a click
              away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-background/50 backdrop-blur-sm">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl w-fit mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Easy Booking</h3>
                <p className="text-sm text-muted-foreground">Book appointments in just 3 clicks</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mt-8">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 rounded-xl w-fit mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Expert Doctors</h3>
                <p className="text-sm text-muted-foreground">Certified healthcare professionals</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 -mt-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl w-fit mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mt-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl w-fit mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Safe</h3>
                <p className="text-sm text-muted-foreground">Your data is protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
