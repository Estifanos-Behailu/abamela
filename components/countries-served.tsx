"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"

export default function CountriesServed() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countries = [
    {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      description:
        "A major destination for Ethiopian workers in various sectors including domestic work, construction, and hospitality.",
    },
    {
      name: "United Arab Emirates",
      flag: "🇦🇪",
      description: "Popular for Construction, hospitality, retail, and domestic work opportunities with competitive compensation.",
    },
    {
      name: "Qatar",
      flag: "🇶🇦",
      description:
        "Growing demand for construction, hospitality, and service industry workers with good working conditions.",
    },
    {
      name: "Kuwait",
      flag: "🇰🇼",
      description: "Opportunities in domestic work, retail, and various service industries with stable employment.",
    },
    {
      name: "Bahrain",
      flag: "🇧🇭",
      description: "Offers positions in hospitality, retail, and domestic sectors with favorable working environments.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Countries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We have extensive experience working with employers across these Middle Eastern countries.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <Card
              key={index}
              className={`border-neutral-200 hover:border-orange-300 transition-all hover:shadow-orange-100 ${
                inView ? `animate-fade-in [animation-delay:${index * 150}ms]` : "opacity-0"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{country.flag}</div>
                <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                <p className="text-sm text-muted-foreground">{country.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
