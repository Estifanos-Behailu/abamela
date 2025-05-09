"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-orange-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Reliable Ethiopian Workforce for Global Success
              </h1>
              <p className="text-xl text-neutral-300 max-w-xl">
                Over 15 years of experience deploying skilled, trustworthy workers to satisfied employers across the
                Middle East.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/process">
                <Button size="lg" className="bg-white text-neutral-900 w-full sm:w-auto hover:bg-orange-500 hover:text-white hover:shadow-[0_4px_20px_rgba(255,165,0,0.5)] transition-shadow">
                  Learn Our Process
                </Button>
              </Link>

              <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:shadow-[0_4px_20px_rgba(255,115,0,0.4)] text-white w-full sm:w-auto transition-all">
                Work with us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/signing.png?height=500&width=600"
                alt="Ethiopian workers"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-xl">
              <p className="font-bold text-lg">15+ Years of Excellence</p>
              <p className="text-neutral-600">Trusted by employers worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
