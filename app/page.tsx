import { DoctorGrid } from "@/components/doctor-grid"
import { SearchBar } from "@/components/search-bar"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Doctor</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Search through our network of qualified healthcare professionals and book your appointment today
            </p>
          </div>
          <SearchBar />
        </div>
        <DoctorGrid />
      </main>
    </div>
  )
}
